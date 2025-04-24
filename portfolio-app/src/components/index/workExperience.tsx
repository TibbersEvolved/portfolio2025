import Job from "./job";
import ImageSalt from "../../assets/saltImg.png";
import ImageParty from "../../assets/partyland.png";
import ImageKjell from "../../assets/kjell.png";

export default function WorkExperience() {
  return (
    <>
      <section className="bg-zinc-50 shadow-md gap-8 p-4 flex flex-col mt-5 mb-4">
        <div className="text-2xl underline">Work Experience</div>
        <Job
          title="Java Fullstack Developer - School of Applied Technology"
          yearFrom={2024}
          yearTo="Current"
          desc="Consultant for hire. 3 Months intense bootcamp followed by upskilling and creating fullstack apps for salesforce"
          image={ImageSalt}
        />
        <Job
          title="Store Manager and Teamleader Coach - Partyland"
          yearFrom={2023}
          yearTo="2024"
          desc="Managed 2 stores, trained and coached staff and other managers. Handled hiring, schedueling and took iniatives to boost sales."
          image={ImageParty}
        />
        <Job
          title="Store Manager- Kjell and Company"
          yearFrom={2021}
          yearTo="2023"
          desc="Manager of store, responsible to train staff, manage budgets and create an amazing shopping experience"
          image={ImageKjell}
        />
      </section>
    </>
  );
}
