import { useState, useEffect } from "react";

export default useMock = ({ t, i18n }) => {
  const mockData = [
    {
      id: 1,
      year: "2021",
      monthly: [
        {
          month: t("month"),
          data: [
            { date: 15, title: t("title1"), type: t("type1") },
            { date: 27, title: t("title2"), type: t("type1") },
          ],
        },
        {
          month: t("month1"),
          data: [
            { date: 2, title: t("title1"), type: t("type2") },
            { date: 30, title: t("title2"), type: t("type2") },
          ],
        },
      ],
    },
  ];

  const [i18, seti18] = useState();
  const [mock, setMock] = useState(mockData);

  const getLocale = async () => {
    setMock(mockData);
  };

  useEffect(() => {
    getLocale();
  }, [i18]);

  return { mock, i18, seti18 };
};
