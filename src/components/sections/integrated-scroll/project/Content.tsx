import { Fragment } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import type { Project } from "@/constants/projects";
import StackBadge from "./StackBadge";

interface ContentProps {
  data: Project;
}

export default function Content({ data }: ContentProps) {
  const { title: projectTitle, company, contents } = data;

  return (
    <>
      <h4 className="pr-[30px] text-title-2 leading-title-2 font-bold text-brand-primary md:pr-0 md:text-title-1 md:leading-title-1">
        {projectTitle}
      </h4>
      <dl className="flex items-center flex-wrap gap-[4px] mt-[8px] text-caption leading-caption text-brand-primary">
        <dt className="w-[calc(50%-2px)] font-bold md:w-auto">
          {company.name}
        </dt>
        <dd className="w-[calc(50%-2px)] text-right md:w-auto md:text-left">
          {company.date}
        </dd>
        <dd className="flex flex-wrap items-center gap-[0_4px] w-full md:w-auto">
          {company.stack.map((s, idx) => (
            <StackBadge key={`stack-${idx}`} stack={s} />
          ))}
        </dd>
      </dl>
      <dl className="overflow-y-auto flex flex-wrap gap-[8px] mt-[24px] max-h-[calc(100%-146px)] border-t border-gray-light text-brand-primary md:justify-end md:gap-[32px_0] md:pt-[24px] md:max-h-[calc(100%-88px)]">
        {contents.map((content, idx) => {
          return (
            <Fragment key={`content-${projectTitle}-${idx}`}>
              <dt
                key={`content-title-${idx}`}
                className="inline-block relative z-0 mt-[24px] text-title-3 leading-title-3 font-bold md:mt-0 md:w-[245px] md:text-title-2 md:leading-title-2"
              >
                {content.title}
              </dt>

              {typeof content.desc === "string" ? (
                <dd className="w-full text-body-1 leading-body-1 break-keep md:w-[calc(100%-245px)]">
                  {content.desc}
                </dd>
              ) : (
                content.desc.map((d, dIdx) => (
                  <dd
                    key={`desc-${projectTitle}-${idx}-${dIdx}`}
                    className={cn(
                      "text-body-1 leading-body-1 break-keep md:w-[calc(100%-245px)]",
                      dIdx > 0 && "w-full md:ml-[245px]"
                    )}
                  >
                    <span className="inline-block mt-[8px] mb-[8px] w-full font-bold md:mb-[8px]">
                      {d.head}
                    </span>
                    {d.body}
                  </dd>
                ))
              )}
            </Fragment>
          );
        })}
      </dl>
    </>
  );
}
