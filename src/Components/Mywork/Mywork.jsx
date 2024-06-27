import "./Mywork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="title">
        <h1>My Work</h1>
        <img src={theme_pattern} alt="logo" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div className="work-format">
              <h2>{work.w_name}</h2>
              <img key={index} src={work.w_img} alt="logo"></img>{" "}
            </div>
          );
        })}
      </div>

      {/* <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div> */}
    </div>
  );
};

export default MyWork;
