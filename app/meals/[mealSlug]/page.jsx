import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

import classes from "./page.module.scss";

export default function MealsPage({ params }) {
  const { mealSlug } = params;
  const meal = getMeal(mealSlug);

  if (!meal) notFound();

  const { image, title, creator, summary, instructions } = meal;
  const mealInstructions = instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={image} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{title}</h1>
          <p className={classes.creator}>{creator}</p>
          <p className={classes.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: mealInstructions,
          }}
        ></p>
      </main>
    </>
  );
}
