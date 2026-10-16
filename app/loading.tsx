export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-[#f7f5f1]">
      <div className="w-10 h-10 rounded-full border-3 border-[#6D1731]/20 border-t-[#6D1731] animate-spin" />
      <span className="text-xs uppercase tracking-widest text-[#77716d] font-medium">
        Loading Stoneway...
      </span>
    </div>
  )
}
