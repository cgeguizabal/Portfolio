import { Dosis } from "next/font/google";
import { CiSettings } from "react-icons/ci";
import { IoCodeSlashOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoLogoGithub } from "react-icons/io5";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

import lightbox from "@/styles/components/lightbox.module.scss";
import useShowCaseStore from "@/store/projectStore";

function Lightbox({
  title,
  project,
  tech,
  preview,
  repository,
  features,
  img,

  children,
}) {
  const close = useShowCaseStore((state) => state.closeAll);
  return (
    <div className={lightbox.overlay} onClick={close}>
      <div className={lightbox.modal} onClick={(e) => e.stopPropagation()}>
        <div>
          <button className={lightbox.close} onClick={close}>
            ×
          </button>
        </div>
        <div className={`${lightbox.content} ${dosis.className}`}>
          <div className={lightbox.content_texts}>
            <p className={lightbox.content_texts_title}>{title}</p>
            {/* Tags BOX */}
            <div className={lightbox.content_tags}>
              <div className={lightbox.content_tags_col1}>
                <p className={lightbox.content_tags_head}>
                  <CiSettings className={lightbox.content_tags_head_icon} />
                  Project:{" "}
                  <span className={lightbox.content_tags_text}>{project}</span>
                </p>
                <p className={lightbox.content_tags_head}>
                  <IoCodeSlashOutline
                    className={lightbox.content_tags_head_icon}
                  />
                  Teck Stack:{" "}
                  <span className={lightbox.content_tags_text}>{tech}</span>
                </p>
              </div>
              <div className={lightbox.content_tags_col2}>
                <p className={lightbox.content_tags_head}>
                  <HiOutlineComputerDesktop
                    className={lightbox.content_tags_head_icon}
                  />
                  Preview:{" "}
                  <a
                    href={preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={lightbox.content_tags_text_link}
                  >
                    {" "}
                    Click here to see the live preview
                  </a>
                </p>
                <p className={lightbox.content_tags_head}>
                  <IoLogoGithub className={lightbox.content_tags_head_icon} />
                  Repository:{" "}
                  <a
                    href={repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={lightbox.content_tags_text_link}
                  >
                    {" "}
                    See the code on GitHub.
                  </a>
                </p>
              </div>
            </div>
            {/* PARAGRAPH BOX */}
            <div className={lightbox.content_paragraph}>
              <p>{children}</p>
              <p className={lightbox.content_paragraph_features}>Features</p>
              <ul className={lightbox.content_paragraph_list}>
                {features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            {/* img BOX */}
            <div className={lightbox.content_img}>
              <img src={img} alt="IMG" className={lightbox.content_img_show} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
