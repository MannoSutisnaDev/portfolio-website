import { ContentBlockType } from "@/types";

export default function ContentBlock({
  main,
  after,
  sub,
  content,
}: ContentBlockType) {
  return (
    <div className="section">
      <div className="top">
        <div className="main">
          <h2 className="title">{main}</h2>
          <p className="after">{after}</p>
        </div>
        <h3 className="sub">{sub}</h3>
      </div>
      <p className="content content-text">{content}</p>
    </div>
  );
}
