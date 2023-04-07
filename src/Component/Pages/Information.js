import React from "react";

const Information = () => {
  return (
    <div>
      <li className="py-12">
        <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base leading-6 font-medium text-accent-500">
              <time dateTime="2020-11-18T17:45:00.000Z">November 18, 2020</time>
            </dd>
          </dl>
          <div className="space-y-5 xl:col-span-3">
            <div className="space-y-6">
              <h2 className="text-2xl leading-8 font-bold tracking-tight">
                <a className="text-accent" href="/tailwindcss-v2">
                  Tailwind CSS v2.0
                </a>
              </h2>
              <div className="prose max-w-none text-accent-500">
                <p>
                  Almost exactly 18 months ago we released Tailwind CSS v1.0,
                  which signalled a commitment to stability while continuing to
                  push the boundaries with exciting new features in every minor
                  release.
                </p>
                <p>
                  Over the course of those 18 months we released nine minor
                  versions that added features like placeholder styling,
                  screenreader visibility, CSS grid, transitions, transforms,
                  animations, layout utilities, integrated tree-shaking,
                  gradients, and tons more.
                </p>
                <p>Today we're finally releasing Tailwind CSS v2.0.</p>
              </div>
            </div>
            <div className="text-base leading-6 font-medium">
              <a
                className="text-primary hover:text-secondary"
                aria-label='Read "Tailwind CSS v2.0"'
                href="/tailwindcss-v2"
              >
                Read more →
              </a>
            </div>
          </div>
        </article>
      </li>
    </div>
  );
};

export default Information;
