import Github from "@/svgs/Github";
import LinkedIn from "@/svgs/LinkedIn";

import Image from "next/image";

export default function Home() {
  return (
    <div className="home">
      <div className="personal">
        <h1 className="name">
          <span className="first-name">Manno</span>
          &nbsp;<span className="last-name">Sutisna</span>
        </h1>
        <div className="info-wrapper">
          <h2>
            <a className="info" href="mailto:mannosutisnahiras@gmail.com">
              mannosutisnahiras@gmail.com
            </a>
          </h2>
        </div>
      </div>
      <p className="intro">
        I am experienced in leveraging agile frameworks to provide a robust
        synopsis for high level overviews. Iterative approaches to corporate
        strategy foster collaborative thinking to further the overall value
        proposition.
      </p>
      <div className="socials">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/manno-sutisna-693176105/">
              <LinkedIn />
            </a>
          </li>
          <li>
            <a href="https://github.com/MannoSutisnaDev/">
              <Github />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
