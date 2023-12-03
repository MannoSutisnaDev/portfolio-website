import { ContentBlockType } from "@/types";

export default function ContentBlock({
  main,
  after,
  sub,
  content,
  subClass,
  afterClass,
}: ContentBlockType) {
  return (
    <div className="section">
      <div className="top">
        <div className="main">
          <h2 className="title">{main}</h2>
          <p className={`after ${afterClass ?? ""}`}>{after}</p>
        </div>
        <h3 className={`sub ${subClass ?? ""}`}>{sub}</h3>
      </div>
      <p className="content content-text">{content}</p>
    </div>
  );
}
