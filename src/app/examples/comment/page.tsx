import BreadScrumbs from "@/app/ui/examples/BreadScrumbs";
import MultipleFileInput from "@/app/ui/examples/MultipleFileSelect";

export default function CommentPage() {
  return (
    <div className="w-full text-xl md:text-2xl mb-4">
      <BreadScrumbs
        breadScrumbs={[
          { title: "Example", href: "/examples" },
          {
            title: "Comment & Explain",
            href: "/examples/comment",
            active: true,
          },
        ]}
      />
      <MultipleFileInput />
    </div>
  );
}
