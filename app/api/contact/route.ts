import { NextResponse } from "next/server"
import { z } from "zod"

const leadSchema = z.object({
  kind: z.enum(["contact", "catalogue"]),
  name: z.string().trim().min(2).max(120),
  phone: z.string().trim().refine((value) => value.replace(/\D/g, "").length >= 10 && value.replace(/\D/g, "").length <= 13),
  email: z.string().trim().email().max(254),
  product: z.string().trim().max(80).refine((value) => !value || ["Granite", "Marble", "Kota Stone", "Vitrified Tiles", "Tile Adhesive", "Raw Materials"].includes(value), "Choose a valid product category.").optional(),
  message: z.string().trim().max(3000).optional(),
  city: z.string().trim().max(120).optional(),
  categories: z.array(z.enum(["Granite", "Marble", "Kota Stone", "Vitrified Tiles", "Tile Adhesive", "Raw Materials"])).max(6).optional(),
  projectType: z.string().trim().max(120).optional(),
}).superRefine((lead, context) => {
  if (lead.kind === "contact" && (!lead.message || lead.message.length < 10)) context.addIssue({ code: "custom", path: ["message"], message: "A message of at least 10 characters is required." })
  if (lead.kind === "catalogue" && !lead.city) context.addIssue({ code: "custom", path: ["city"], message: "City is required for catalogue requests." })
  if (lead.kind === "catalogue" && !lead.categories?.length) context.addIssue({ code: "custom", path: ["categories"], message: "Select at least one catalogue category." })
})

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Request body must be valid JSON." }, { status: 400 })
  }
  const result = leadSchema.safeParse(body)
  if (!result.success) return NextResponse.json({ error: result.error.issues[0]?.message ?? "Please check your details." }, { status: 400 })

  return NextResponse.json({ ok: true, message: "Your details were validated successfully." }, { status: 202 })
}
