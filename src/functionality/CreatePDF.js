import { jsPDF } from 'jspdf'

const generateString = ({
  casePresentation,
  clarifyingQuestions,
  hypothesizing,
  reflection
}) => {
  return `Case Presentation
  ${casePresentation}

  Clarifying Questions
  ${clarifyingQuestions}

  Hypothesizing
  ${hypothesizing}

  Reflection
  ${reflection}
  `
}

const generatePDF = ({
  casePresentation,
  clarifyingQuestions,
  hypothesizing,
  reflection
}, fileName="document.pdf") => {
  
  const doc = new jsPDF()
  
  doc.text(generateString({
    casePresentation,
    clarifyingQuestions,
    hypothesizing,
    reflection
  }), 50, 50)

  doc.save(fileName)
}

export default generatePDF