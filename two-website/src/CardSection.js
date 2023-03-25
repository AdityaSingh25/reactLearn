import React from "react";
import Card from "./Card";
const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <div className="row">
          <div className="col-4">
            <Card
              title="Mama Will Tell"
              buttonText="Click Me!!"
              image="https://media.licdn.com/dms/image/C5612AQH56ukP_p7F9g/article-cover_image-shrink_600_2000/0/1558117599424?e=2147483647&v=beta&t=1HmDFh6LV_HXC9gqWDYYyV9gwQS-GSrqTccVWkWTb-s"
            />
          </div>
          <div className="col-4">
            <Card
              title="Mama Will Tell"
              buttonText="Click Me!!"
              image="https://www.allsetconsulting.com/wp-content/uploads/2021/02/what-is-sap-basis-scaled.jpg"
            />
          </div>
          <div className="col-4">
            <Card
              title="Mama Will Tell"
              buttonText="Go to Link"
              image="https://newtekslateassets.s3.us-west-2.amazonaws.com/wp-content/uploads/sap-basis-training-09032022.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
