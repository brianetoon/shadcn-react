import SkeletonCard from "./SkeletonCard"

export default function Loading() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 9 }, (_, i) => i + 1).map(id => (
        <SkeletonCard key={id} />
      ))}
    </div>
  )
}
