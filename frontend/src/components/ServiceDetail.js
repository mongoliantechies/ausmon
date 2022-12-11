import React from "react";
import { memo } from "react";

export const ServiceDetail = memo(({ language, topic }) => {
  return (
    <div className="serviceTitle">
      <h2 className="text-primary mb-2">{topic.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: topic.content.context }} />
      {(topic.content.images || []).map((image) => {
        return (
          <img
            src={process.env.PUBLIC_URL + `/service-images/health/` + image}
            alt=""
            key={image}
          />
        );
      })}
      {""}

      <p style={{ fontSize: "1em", fontWeight: "bold" }}>
        {language === "mon" ? "Эх сурвалж сайт: " : "Resource from: "}
      </p>
      <ul>
        {topic.content.resources.map((resource) => (
          <li>
            <a href={resource.link}>{resource.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
});
