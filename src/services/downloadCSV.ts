export interface Answer {
  order: string;
  title: string;
  type: string;
  answer: string;
}

function generateCSV(answers: Answer[]): string {
  const header = "order,title,type,answer\n";
  const csv = answers
    .map(
      (answer) =>
        `${answer.order},"${answer.title}","${answer.type}","${answer.answer}"`,
    )
    .join("\n");
  return header + csv;
}

export function downloadCSV(answers: Answer[]): void {
  const csvContent = generateCSV(answers);

  const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvContent}`);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "user_answers.csv");
  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
}
