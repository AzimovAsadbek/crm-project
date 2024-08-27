export const weeks = [
  { full: "Yakshanba", short: "Yak" },
  { full: "Dushanba", short: "Dush" },
  { full: "Seshanba", short: "Sesh" },
  { full: "Chorshanba", short: "Chor" },
  { full: "Payshanba", short: "Pays" },
  { full: "Juma", short: "Juma" },
  { full: "Shanba", short: "Shan" },
];

const months = [
  { full: "Yanvar", short: "Yan" },
  { full: "Fevral", short: "Fev" },
  { full: "Mart", short: "Mar" },
  { full: "Aprel", short: "Apr" },
  { full: "May", short: "May" },
  { full: "Iyun", short: "Iyun" },
  { full: "Iyul", short: "Iyul" },
  { full: "Avgust", short: "Avg" },
  { full: "Sentyabr", short: "Sen" },
  { full: "Oktyabr", short: "Otk" },
  { full: "Noyabr", short: "Noy" },
  { full: "Dekabr", short: "Dek" },
];

const getDate = (number) => {
  const d = new Date(new Date().setDate(new Date().getDate() - number));
  return d;
};

const useDate = () => {
  const d = new Date();
  let day = weeks[d.getDay()];
  let month = months[d.getMonth()];
  let date = d.getDate();
  let year = d.getFullYear();
  let week = (count = 0) => [
    getDate(count + 3),
    getDate(count + 2),
    getDate(count + 1),
    getDate(count),
    getDate(count - 1),
    getDate(count - 2),
    getDate(count - 3),
  ];
  return { day, month, date, year, week };
};
export default useDate;
