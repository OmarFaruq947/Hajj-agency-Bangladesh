import React from "react";
import profilepic from "../../../assets/img/profile.png";
import SocialMedia from "../SocialMedia";

const About = () => {
  return (
    <div>
      <div className="antialiased">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <main>
            <article className="xl:divide-y xl:divide-gray-200">
              <header className="pt-28 xl:pb-10">
                <div className="space-y-1 text-center">
                  <div>
                    <h2 className="text-3xl tracking-tight leading-10 font-extrabold text-accent sm:text-4xl sm:leading-none md:text-5xl">
                      Hajj & Umrah Agency
                      <span className="text-secondary"> Bangladesh</span>
                    </h2>
                  </div>
                </div>
              </header>
              <div
                className="divide-y xl:divide-y-0 divide-gray-200 xl:grid xl:grid-cols-4 xl:col-gap-6 pb-16 xl:pb-20"
                style={{ gridTemplateRows: "auto 1fr" }}
              >
                <dl className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200">
                  <dd>
                    <ul className="flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8">
                      <li className="flex items-center space-x-2">
                        <img
                          src={profilepic}
                          alt=""
                          className="w-10 h-10 rounded-full"
                        />
                        <dl className="text-sm font-medium leading-5 whitespace-no-wrap">
                          <dd className="text-accent">Md. Omar Faruq</dd>

                          <dd>
                            <a
                              target="_blank"
                              href="https://omarfaruqmebd.netlify.app/"
                              className=" text-secondary"
                            >
                              @omarfaruq
                            </a>
                          </dd>
                        </dl>
                      </li>
                    </ul>
                  </dd>
                </dl>

                <div className="divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2">
                  <div className="prose max-w-none pt-10 pb-8">
                    <p>
                      Almost exactly 18 months ago we released Tailwind CSS
                      v1.0, which signalled a commitment to stability while
                      continuing to push the boundaries with exciting new
                      features in every minor release.
                    </p>
                    <p>
                      Over the course of those 18 months we released nine minor
                      versions that added features like placeholder styling,
                      screenreader visibility, CSS grid, transitions,
                      transforms, animations, layout utilities, integrated
                      tree-shaking, gradients, and tons more.
                    </p>
                    <p>Today we're finally releasing Tailwind CSS v2.0.</p>

                    <p>
                      Tailwind CSS v2.0 is the first major update ever,
                      including:
                    </p>

                    <p>
                      Exciting I know but also let's be serious for like three
                      years. Now it's blessed though, I get it.
                    </p>
                    <hr />
                    <h2 id="new-outline-ring-utilities">
                      New outline ring utilities
                    </h2>
                    <p>
                      You know how the <code>outline</code> property ignores
                      border radius and pretty much just always looks bad? The{" "}
                      <code>ring</code> utilities are our attempt to will a
                      better solution into existence through blood, sweat, and
                      tears.
                    </p>
                    <p>
                      They work a lot like the <code>border</code> utilities,
                      except they add a solid box-shadow rather than a border so
                      they don't impact the layout:
                    </p>

                    <p>
                      You can even offset them to create a sort of halo effect
                      with{" "}
                      <code>
                        ring-offset-{"{"}width{"}"}
                      </code>{" "}
                      utilities:
                    </p>
                  </div>
                  <SocialMedia />
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
};

export default About;
