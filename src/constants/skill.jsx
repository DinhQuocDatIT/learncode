import { html, css, js, react } from "../assets/logo";
import { dataHtml, dataCss, dataJs, dataReact } from "../datas";

const skills = [
  {
    id: 1,
    name: "Tất cả",
    logo: null,
    count: dataHtml.length + dataCss.length + dataJs.length + dataReact.length,
    questions: [...dataHtml, ...dataCss, ...dataJs, ...dataReact],
  },
  {
    id: 2,
    name: "HTML",
    logo: html,
    count: dataHtml.length,
    questions: dataHtml,
  },
  { id: 3, name: "CSS", logo: css, count: dataCss.length, questions: dataCss },
  {
    id: 4,
    name: "JavaScript",
    logo: js,
    count: dataJs.length,
    questions: dataJs,
  },
  {
    id: 5,
    name: "React",
    logo: react,
    count: dataReact.length,
    questions: dataReact,
  },
];

export default skills;
