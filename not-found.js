import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto flex">
      <div className="row mx-auto text-center pt-64">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href={"/"}>Return Home</Link>
      </div>
    </div>
  );
}
