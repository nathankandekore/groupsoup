import React from "react";

export const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={props.componentRef}>
      <h1>Case Presentation</h1>
      <div>{props.casePresentation}</div>
      <br />
      <h1>Clarifying Questions</h1>
      <div>{props.clarifyingQuestions}</div>
      <br />
      <h1>Hypothesizing</h1>
      <div>{props.hypothesizing}</div>
      <br />
      <h1>Reflection</h1>
      <div>{props.reflection}</div>
    </div>
  );
});
