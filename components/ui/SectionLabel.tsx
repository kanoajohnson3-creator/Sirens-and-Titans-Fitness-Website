export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-6 h-px bg-[#4A7C26]" />
      <span
        className="font-body text-sm font-medium uppercase text-[#4A7C26]"
        style={{ letterSpacing: '0.2em' }}
      >
        {children}
      </span>
    </div>
  )
}
