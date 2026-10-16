"use client"

import { useState } from "react"
import { z } from "zod"
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react"
import { productCategories } from "@/components/site/catalog-data"

const emailSchema = z.string().email("Enter a valid email address.")
const phoneSchema = z.string().refine((value) => value.replace(/\D/g, "").length >= 10 && value.replace(/\D/g, "").length <= 13, "Enter a valid phone number.")
type LeadKind = "contact" | "catalogue"
type LeadFormProps = { kind: LeadKind; initialInterest?: string }

export function LeadForm({ kind, initialInterest = "" }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const [categories, setCategories] = useState<string[]>(initialInterest ? [initialInterest] : [])
  const [interest, setInterest] = useState(initialInterest)
  const isCatalogue = kind === "catalogue"

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus("sending")
    setMessage("")
    const formData = new FormData(event.currentTarget)
    const payload = {
      kind,
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      product: String(formData.get("product") ?? ""),
      message: String(formData.get("message") ?? "").trim(),
      city: String(formData.get("city") ?? "").trim(),
      categories,
      projectType: String(formData.get("projectType") ?? ""),
    }
    const schema = z.object({
      kind: z.enum(["contact", "catalogue"]),
      name: z.string().min(2, "Please enter your name."),
      phone: phoneSchema,
      email: emailSchema,
      product: z.string().optional(),
      message: z.string().optional(),
      city: z.string().optional(),
      categories: z.array(z.string()).optional(),
      projectType: z.string().optional(),
    }).superRefine((value, context) => {
      if (value.kind === "contact" && (!value.message || value.message.length < 10)) context.addIssue({ code: "custom", message: "Please add a little more detail (at least 10 characters).", path: ["message"] })
      if (value.kind === "catalogue" && !value.city) context.addIssue({ code: "custom", message: "Please enter your city.", path: ["city"] })
      if (value.kind === "catalogue" && !value.categories?.length) context.addIssue({ code: "custom", message: "Select at least one category.", path: ["categories"] })
    })
    const result = schema.safeParse(payload)
    if (!result.success) {
      setStatus("error")
      setMessage(result.error.issues[0]?.message ?? "Please check the form fields.")
      return
    }
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(result.data) })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "We couldn’t submit the form. Please try again.")
      setStatus("success")
      setMessage(data.message)
      form.reset()
      setCategories([])
      setInterest("")
    } catch (error) {
      setStatus("error")
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please call our showroom.")
    }
  }

  return <form className="lead-form" onSubmit={handleSubmit} noValidate>
    <div className="form-grid">
      <div className="form-field"><label htmlFor={`${kind}-name`}>Name <span>*</span></label><input id={`${kind}-name`} name="name" autoComplete="name" placeholder="Your full name" minLength={2} required /></div>
      <div className="form-field"><label htmlFor={`${kind}-phone`}>Phone <span>*</span></label><input id={`${kind}-phone`} name="phone" type="tel" autoComplete="tel" placeholder="+91 00000 00000" required /></div>
      <div className="form-field"><label htmlFor={`${kind}-email`}>Email <span>*</span></label><input id={`${kind}-email`} name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></div>
      {isCatalogue ? <div className="form-field"><label htmlFor="catalogue-city">City <span>*</span></label><input id="catalogue-city" name="city" autoComplete="address-level2" placeholder="Your city" required /></div> : <div className="form-field"><label htmlFor="contact-product">Product interest</label><select id="contact-product" name="product" value={interest} onChange={(event) => setInterest(event.target.value)}><option value="">Choose a category</option>{productCategories.map((category) => <option key={category} value={category}>{category === "Raw Materials" ? "Raw Materials" : category}</option>)}</select></div>}
      {isCatalogue && <div className="form-field form-field-full"><fieldset className="category-fieldset"><legend>Catalogue categories <span>*</span></legend><div className="checkbox-grid">{productCategories.map((category) => <label className="checkbox-option" key={category}><input type="checkbox" name="categories" value={category} checked={categories.includes(category)} onChange={(event) => setCategories((current) => event.target.checked ? [...current, category] : current.filter((item) => item !== category))} /><span className="custom-checkbox"><CheckCircle2 /></span>{category === "Raw Materials" ? "Raw Materials" : category}</label>)}</div></fieldset></div>}
      {isCatalogue && <div className="form-field form-field-full"><label htmlFor="project-type">Project type</label><select id="project-type" name="projectType" defaultValue=""><option value="">Select project type</option><option>Home renovation</option><option>New home construction</option><option>Commercial project</option><option>Contractor / builder</option><option>Other</option></select></div>}
      {!isCatalogue && <div className="form-field form-field-full"><label htmlFor="contact-message">Message <span>*</span></label><textarea id="contact-message" name="message" placeholder="Tell us a little about your project..." rows={5} minLength={10} required /></div>}
    </div>
    {status === "success" && <div className="form-status form-success" role="status"><CheckCircle2 /><span>{message}<small>This form uses a validated demo endpoint. Connect an inbox or CRM before accepting live enquiries.</small></span></div>}
    {status === "error" && <p className="form-status form-error" role="alert">{message}</p>}
    <button className="pill-button form-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? <>Sending <LoaderCircle className="spin-icon" /></> : <>{isCatalogue ? "Request My Catalogue" : "Send Enquiry"}<span className="circle-arrow"><ArrowUpRight /></span></>}</button>
    <p className="form-privacy">By submitting this form, you agree that Stoneway may contact you about your request.</p>
  </form>
}
