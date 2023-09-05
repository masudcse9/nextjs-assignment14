"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div className="container mx-auto flex">
      <div className="row mx-auto text-center pt-64">
        <h2>Something went wrong!</h2>
        <Link href={"/"} className="btn btn-primary">
          Home Page
        </Link>
      </div>
    </div>
  );
}
