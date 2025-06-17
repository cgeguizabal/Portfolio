import about from "@/styles/components/about.module.scss";
import { Dosis } from "next/font/google";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

function EducationBox({ date, degree, place, className }) {
  return (
    <div className={className}>
      <h6 className={`${about.education_date} ${dosis.className}`}>{date}</h6>
      <h5 className={`${about.education_degree} ${dosis.className}`}>
        {degree}
      </h5>
      <p className={`${about.education_place} ${dosis.className}`}>{place}</p>
    </div>
  );
}

export default EducationBox;
