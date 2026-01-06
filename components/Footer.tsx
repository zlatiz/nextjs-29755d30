import React from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="w-full border-t border-border bg-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <div>© Copyright 2015 by <span className="font-medium text-gray-900">Garber Bros, Inc.</span>. All Rights Reserved.</div>
        <div className="mt-3 md:mt-0 text-right w-full md:w-auto">
          <a href="/transparency-in-coverage" className="text-gray-700">Transparency in Coverage</a>
          <div className="mt-2"><a href="http://www.goodhiring.com/garberbrosinc/apply/open">Apply via GoodHiring</a></div>
          <div className="mt-2"><a href="contact.aspx">contact.aspx</a></div>
          <div className="mt-2"><a href="#">#</a></div>
        </div>
      </div>
    </footer>
  );
}
