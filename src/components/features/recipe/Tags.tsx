export default function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-4">
      {tags.map(tag => (
        <div key={tag} className="badge badge-sm badge-primary text-base-100 mr-2">
          {tag.toLowerCase().replace(/_/g, ' ')}
        </div>
      ))}
    </div>
  );
}
