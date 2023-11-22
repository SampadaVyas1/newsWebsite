import classes from "./news.module.scss";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { useParams } from "react-router-dom";

const News = () => {
  const { id } = useParams();
  const readHandler = (link: string) => {
    window.location.href = link;
  };
  return (
    <div className={classes.newsContainer}>
      <div className={classes.detailsContainer}>
        <div className={classes.newsHeading}>
          Murder of our young people’: SC bans stubble fires in UP, Raj,
          Haryana, Punjab
        </div>
        <div className={classes.authorName}>ByAbraham Thomas</div>
        <div className={classes.content}>
          <div className={classes.iconAndDate}>
            <div className={classes.pubishedTime}>
              Nov 07, 2023 04:09 PM IST
            </div>
            <div className={classes.icons}>
              <BsLinkedin
                className={classes.linkdinIcon}
                onClick={() => readHandler("https://www.linkedin.com/")}
              />
              <FaXTwitter
                className={classes.twitterIcon}
                onClick={() => readHandler("https://twitter.com/")}
              />
              <BsFacebook
                className={classes.faceBookIcon}
                onClick={() => readHandler("https://www.facebook.com/")}
              />
              <button
                className={classes.whatsAppButton}
                onClick={() => readHandler("https://web.whatsapp.com")}
              >
                Join Us
                <ImWhatsapp className={classes.whatsAppIcon} />
              </button>
            </div>
          </div>
          <div className={classes.details}>
            <p className={classes.textContent}>
              Once again, Air India is under scrutiny for its subpar service, as
              it left some passengers stranded at the Indira Gandhi
              International (IGI) Airport. The Kolkata-bound Air India flight
              from Delhi was delayed due to a technical snag with the aircraft.
              Air India passenger aircraft Air India passenger aircraft The Air
              India flight AI 762 was scheduled to take off from Delhi for
              Kolkata at 9 pm IST but was delayed until 11:55 pm. This led to a
              chaotic situation at midnight, leaving passengers stranded at
              Delhi airport till 2 am in the early morning.
            </p>{" "}
            <img
              src={
                "https://www.thestatesman.com/wp-content/uploads/2018/10/AIR-INDIA-1024x571.jpg"
              }
              alt=""
              className={classes.heroImage}
            />
            <div className={classes.textContent}>
              We're now on WhatsApp. Click to join. Number of passengers had
              made travel arrangements to reunite with their families ahead of
              Diwali but were disrupted by Air India's flight cancellations. A
              senior doctor, Souradipta Chandra, who was supposed to travel on
              the Air India flight to Kolkata, told ANI, "Our flight AI 762 from
              Delhi to Kolkata was scheduled to depart at 9 pm on November 7. We
              were informed around 4.30 pm that the flight has been delayed by
              an hour. We reached the airport at 7.30 pm, only to be informed
              the flight would depart at midnight. After waiting at the airport
              for 5 hours, we reached the boarding gate, where the staff kept
              informing us that the boarding would begin in about 10 minutes.
              This went on for over 2 hours, after which there was utter chaos.
              The staff was of no help, and passengers rightfully lost their
              cool." Later, several passengers claimed that no refreshments were
              given to them. "As per the economy class passengers, no food or
              refreshments were provided," passengers said. Doctor Souradipta
              wanted to travel to Kolkata to attend to his patients, but due to
              a delayed flight, he could not manage to attend his patients.
              "When I realised around 1.30 am that this flight would eventually
              not leave, I managed to get my ticket cancelled and get on another
              flight the next morning (today), so I could go home and rest. My
              schedule was ruined anyway, and for Air India's utter
              unprofessionalism, my patients have also suffered," Dr Chandra
              told ANI. Passenger Dr Souradipta Chandra took to social media and
              criticised Air India, saying, "Clearly, nothing has improved in
              AirIndia Flight AI 762 from Delhi-Kolkata postponed indefinitely
              with no help from staff. Passengers stuck for 6 hours. 9 pm
              scheduled flight - scenes at 1 AM at IGI T3 gate 32 B." Dr
              Souradipta Chandra, along with tagging Aviation Minister Scindia,
              shared a short video on social media depicting distressed
              passengers engaged in arguments with Air India staff. Air India
              replied on X on flight cancellation and apology to the passengers,
              "We deeply regret that this delay has impacted your journey.
              However, your feedback is crucial to us, as it helps us identify
              areas where we can improve our services and ensure that they avoid
              recurrence in the future. This will certainly be looked into."
              This is not the first time that Air India has cancelled a flight
              in said sector due to a technical snag, as it experienced earlier.
              "Exciting news! Hindustan Times is now on WhatsApp Channels
              Subscribe today by clicking the link and stay updated with the
              latest news!" Click here! Get Latest India News along with Latest
              News and Top Headlines from India and around the world
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
