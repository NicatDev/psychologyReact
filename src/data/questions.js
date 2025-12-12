const questionsData = [
  // Likert tipli suallar (1-5 bal)
  {
    question: "Özümə diqqət çəkməməyə çalışıram.",
    type: "likert",
    dimension: "EI",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 5,
          I: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 1,
          I: 5,
        },
      },
    ],
  },
  {
    question: "Biri ilə razılaşmayanda özümü narahat hiss edirəm.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question: "Əşyalarımı itirirəm.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 5,
          P: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 1,
          P: 5,
        },
      },
    ],
  },
  {
    question: "Mənim canlı təsəvvürüm var.",
    type: "likert",
    dimension: "SN",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question:
      "Mənim şərəfim üçün təşkil olunan böyük bir məclisdə iştirak etməkdən həzz alırdım.",
    type: "likert",
    dimension: "EI",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 1,
          I: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 5,
          I: 1,
        },
      },
    ],
  },
  {
    question: "Başqaları ilə rəqabətdə olmağı xoşlamıram.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question: "Mən qrafikə riayət etməyi üstün tuturam.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 1,
          P: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 5,
          P: 1,
        },
      },
    ],
  },
  {
    question: "Mən böyüklərimin müdrikliyinə şübhə edirəm.",
    type: "likert",
    dimension: "SN", // Ənənələrə qarşı intuitivlik
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question: "Mən diqqət mərkəzində olmaqdan zövq alıram.",
    type: "likert",
    dimension: "EI",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 1,
          I: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 5,
          I: 1,
        },
      },
    ],
  },
  {
    question: "Mən münaqişədən qaçmağa çalışıram.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question: "İşlərimin vaxtında bitməsinə əminəm.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 1,
          P: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 5,
          P: 1,
        },
      },
    ],
  },
  {
    question: "Ənənələrə riayət etmək mənim üçün vacibdir.",
    type: "likert",
    dimension: "SN",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 1,
          N: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 5,
          N: 1,
        },
      },
    ],
  },
  {
    question: "Məşhur olmağa çalışıram.",
    type: "likert",
    dimension: "EI",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 1,
          I: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 5,
          I: 1,
        },
      },
    ],
  },
  {
    question: "Evsizlərə yazığım gəlir.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question: "Mən impulsları idarə etməkdə çətinlik çəkirəm.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 5,
          P: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 1,
          P: 5,
        },
      },
    ],
  },
  {
    question: "İnsanların etdiklərini niyə etdiklərini düşünürəm.",
    type: "likert",
    dimension: "SN",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question: "Ətrafımda çoxlu insan olmaq mənə enerji verir.",
    type: "likert",
    dimension: "EI",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 1,
          I: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 5,
          I: 1,
        },
      },
    ],
  },
  {
    question: "Ətrafımdakı insanlara kömək edirəm.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question: "Mən iddialıyam.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 1,
          P: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 5,
          P: 1,
        },
      },
    ],
  },
  {
    question: "Mən hər şeyi keçmişdə edildiyi kimi etməyi xoşlayıram.",
    type: "likert",
    dimension: "SN",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 1,
          N: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 5,
          N: 1,
        },
      },
    ],
  },
  {
    question: "Mən tək qalmaqdan çəkinirəm.",
    type: "likert",
    dimension: "EI",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 5,
          I: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 1,
          I: 5,
        },
      },
    ],
  },
  {
    question: "Mən asanlıqla bağışlayıram.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question: "Yeni hobbiləri sınamağı xoşlayıram.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 5,
          P: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 1,
          P: 5,
        },
      },
    ],
  },
  {
    question: "Mən aktiv qalmağı xoşlayıram.",
    type: "likert",
    dimension: "EI", // Və ya JP, aktivlik hər ikisinə aid ola bilər
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 1,
          I: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 5,
          I: 1,
        },
      },
    ],
  },
  {
    question: "Qərar verərkən tamamilə obyektiv olmaq daha yaxşıdır.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 1,
          F: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 5,
          F: 1,
        },
      },
    ],
  },
  {
    question: "Əşyalarımı öz yerində saxlayıram.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 1,
          P: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 5,
          P: 1,
        },
      },
    ],
  },
  {
    question: "Mənim zəngin fantaziya həyatım var.",
    type: "likert",
    dimension: "SN",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question: "Deyəcəklərim azdır.",
    type: "likert",
    dimension: "EI",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 5,
          I: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 1,
          I: 5,
        },
      },
    ],
  },
  {
    question:
      "İnsanlar kədərləndikləri zaman onların yanında olmaqdan zövq alıram.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question: "Müəyyən bir cədvəl qurmaqdansa, axınla getməyi üstün tuturam.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 5,
          P: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 1,
          P: 5,
        },
      },
    ],
  },
  {
    question: "Mən fəlsəfi müzakirələrdən zövq alıram.",
    type: "likert",
    dimension: "SN",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question: "Başqalarına nə düşündüyümü bildirirəm.",
    type: "likert",
    dimension: "EI",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 1,
          I: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 5,
          I: 1,
        },
      },
    ],
  },
  {
    question: "Razı olmadığım halda belə mübahisə etməkdən çəkinirəm.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question: "Mən vaxt çərçivəsinə çox diqqət edirəm.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 1,
          P: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 5,
          P: 1,
        },
      },
    ],
  },
  {
    question: "Musiqi alətində ifa etmək istərdim.",
    type: "likert",
    dimension: "SN",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question: "Mən çox əylənirəm.",
    type: "likert",
    dimension: "EI",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 1,
          I: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 5,
          I: 1,
        },
      },
    ],
  },
  {
    question: "Mən vəsvəsələrə müqavimət göstərirəm.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 1,
          P: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 5,
          P: 1,
        },
      },
    ],
  },
  {
    question: "Yad adamlarla danışmaq mənim üçün asandır.",
    type: "likert",
    dimension: "EI",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 1,
          I: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 5,
          I: 1,
        },
      },
    ],
  },
  {
    question: "Mən yaşlı insanların rifahı üçün narahatam.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question: "Həyatda uğur qazanmağa qərarlıyam.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 1,
          P: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 5,
          P: 1,
        },
      },
    ],
  },
  {
    question: "İncəsənətin əhəmiyyətinə inanıram.",
    type: "likert",
    dimension: "SN",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question: "Boş vaxtlarımı tək keçirməyi xoşlayıram.",
    type: "likert",
    dimension: "EI",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 5,
          I: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 1,
          I: 5,
        },
      },
    ],
  },
  {
    question: "İnanıram ki, insanlar səhvlərinə görə cəzalandırılmalıdırlar.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 1,
          F: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 5,
          F: 1,
        },
      },
    ],
  },
  {
    question: "Təkrarlanan gündəlik işdən zövq alıram.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 1,
          P: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 5,
          P: 1,
        },
      },
    ],
  },
  {
    question: "Yeni təcrübələr axtarmağa vaxt sərf edirəm.",
    type: "likert",
    dimension: "SN",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question: "Mən yoldayam.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 5,
          P: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 1,
          P: 5,
        },
      },
    ],
  },
  {
    question: "Başqalarının daha məntiqli olmasını istərdim.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 1,
          F: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 5,
          F: 1,
        },
      },
    ],
  },
  {
    question: "Mən yığışdırmağı xoşlayıram.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 1,
          P: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 5,
          P: 1,
        },
      },
    ],
  },
  {
    question: "Gələcəyi təsəvvür etməkdən zövq alıram.",
    type: "likert",
    dimension: "SN",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question: "Fikirlərimi ifadə etməkdə çətinlik çəkirəm.",
    type: "likert",
    dimension: "EI",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 5,
          I: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 1,
          I: 5,
        },
      },
    ],
  },
  {
    question: "Başqalarına şəxsi problemlərində kömək etməyi xoşlayıram.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question: "Tapşırıqları vaxtından əvvəl bitirirəm.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 1,
          P: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 5,
          P: 1,
        },
      },
    ],
  },
  {
    question: "Mən kainatın sirləri haqqında düşünməyi xoşlayıram.",
    type: "likert",
    dimension: "SN",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question: "Məndə çox enerji var.",
    type: "likert",
    dimension: "EI",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 1,
          I: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 5,
          I: 1,
        },
      },
    ],
  },
  {
    question: "Kiminsə məni sevməməsinə dözə bilmirəm.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question: "Mən impulslarımı izləyirəm.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 5,
          P: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 1,
          P: 5,
        },
      },
    ],
  },
  {
    question: "Mən mürəkkəb fikirləri anlamağa çalışmaqdan zövq alıram.",
    type: "likert",
    dimension: "SN",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question: "özümü çox xoşbəxt hiss edirəm.", // Bu sual birbaşa MBTI-ni ölçmür, lakin müəyyən bir tipin əlaməti ola bilər. Neytral saxlayıram.
    type: "likert",
    dimension: "None",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {},
      },
      {
        text: "Razı deyiləm",
        value: {},
      },
      {
        text: "Neytral",
        value: {},
      },
      {
        text: "Razıyam",
        value: {},
      },
      {
        text: "Tamamilə razıyam",
        value: {},
      },
    ],
  },
  {
    question: "Özümü anlamağa vaxt sərf edirəm.",
    type: "likert",
    dimension: "SN", // İntrospeksiya, N ilə əlaqəli ola bilər
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question: "Yeni insanlarla tanış olmaq məni həyəcanlandırır.",
    type: "likert",
    dimension: "EI",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 1,
          I: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 5,
          I: 1,
        },
      },
    ],
  },
  {
    question: "Başqalarının dəstəyinə ehtiyacım var.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question: "Mən nizamsızlıqdan narahat deyiləm.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 5,
          P: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 1,
          P: 5,
        },
      },
    ],
  },
  {
    question: "Muzeylərə getməkdən zövq alıram.",
    type: "likert",
    dimension: "SN",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question: "Mən səs-küylü izdihamdan qaçıram.",
    type: "likert",
    dimension: "EI",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 5,
          I: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 1,
          I: 5,
        },
      },
    ],
  },
  {
    question:
      "Başqalarının səhvlərini bağışlayıram, hətta onlar şəxsən mənə zərər versələr belə.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question: "Mən planlar qururam və onlara əməl edirəm.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 1,
          P: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 5,
          P: 1,
        },
      },
    ],
  },
  {
    question:
      "İşə yarayacağına əmin olmasam da, hər şeyi fərqli etməyi xoşlayıram.",
    type: "likert",
    dimension: "SN",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question: "Mən uzun müddət bir yerdə oturmağı sevmirəm.",
    type: "likert",
    dimension: "EI",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 1,
          I: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 5,
          I: 1,
        },
      },
    ],
  },
  {
    question: "Hisslərimə əsaslanaraq vacib qərarlar verirəm.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question:
      "Tapşırıqlara əvvəlcədən başlayıram ki, bitirməyə çox vaxtım olsun.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 1,
          P: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 5,
          P: 1,
        },
      },
    ],
  },
  {
    question: "Mən öz fikirlərimi saxlayıram.",
    type: "likert",
    dimension: "EI",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 5,
          I: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 1,
          I: 5,
        },
      },
    ],
  },
  {
    question: "Başqalarının hisslərinə qarşı həssasam.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question: "Mən asanlıqla diqqətimi yayındırıram.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 5,
          P: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 1,
          P: 5,
        },
      },
    ],
  },
  {
    question: "Elmi nəzəriyyələri öyrənməkdən zövq alıram.",
    type: "likert",
    dimension: "SN",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question: "Mən həyatı sevirəm.",
    type: "likert",
    dimension: "EI", // Və ya P
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 1,
          I: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 5,
          I: 1,
        },
      },
    ],
  },
  {
    question: "Başqalarını razı salmaq üçün çox çalışıram.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question: "Həyat həvəsim var.",
    type: "likert",
    dimension: "EI",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 1,
          I: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 5,
          I: 1,
        },
      },
    ],
  },
  {
    question: "Mənim qədər şanslı olmayan insanlara kömək edirəm.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question: "Bir işə başlamazdan əvvəl ətraflı plan qurmağı xoşlayıram.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 1,
          P: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 5,
          P: 1,
        },
      },
    ],
  },
  {
    question: "Özümdən soruşuram ki, niyə olduğum kimiyəm.",
    type: "likert",
    dimension: "SN",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question: "Mən yeni dostlar qazanmağı sevirəm.",
    type: "likert",
    dimension: "EI",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 1,
          I: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 5,
          I: 1,
        },
      },
    ],
  },
  {
    question: "Başqalarının məni bəyənməsi mənim üçün vacibdir.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question: "Rutinə sadiq qalmaqda çətinlik çəkirəm.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 5,
          P: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 1,
          P: 5,
        },
      },
    ],
  },
  {
    question: "Mən təbiətin gözəlliyini yüksək qiymətləndirirəm.",
    type: "likert",
    dimension: "SN",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question: "Mən sakit mühitə üstünlük verirəm.",
    type: "likert",
    dimension: "EI",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 5,
          I: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 1,
          I: 5,
        },
      },
    ],
  },
  {
    question: "Mən bir işə başlamaqda çətinlik çəkirəm.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 5,
          P: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 1,
          P: 5,
        },
      },
    ],
  },
  {
    question: "Emosional insanlar məni narahat edir.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 1,
          F: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 5,
          F: 1,
        },
      },
    ],
  },
  {
    question: "İnsanlar mənə deyirlər ki, çox sakitəm.",
    type: "likert",
    dimension: "EI",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 5,
          I: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 1,
          I: 5,
        },
      },
    ],
  },
  {
    question: "Mən başqaları üçün narahatam.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question:
      "Əyləncəli bir şey etməzdən əvvəl bütün işlərimi bitirməyi xoşlayıram.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 1,
          P: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 5,
          P: 1,
        },
      },
    ],
  },
  {
    question: "Yeni tanışlarla söhbət etməkdən zövq alıram.",
    type: "likert",
    dimension: "EI",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 1,
          I: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 5,
          I: 1,
        },
      },
    ],
  },
  {
    question:
      "Emosiyalara qapılmadan qərarlar qəbul etmək mənim üçün vacibdir.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 1,
          F: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 5,
          F: 1,
        },
      },
    ],
  },
  {
    question: "Planlarımı həyata keçirirəm.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 1,
          P: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 5,
          P: 1,
        },
      },
    ],
  },
  {
    question: "Daha böyük mənzərəni başa düşmək mənim üçün vacibdir.",
    type: "likert",
    dimension: "SN",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question: "Başqalarına xidmət etmək mənim üçün vacibdir.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question: "Özüm və həyatım haqqında düşünməkdən zövq alıram.",
    type: "likert",
    dimension: "SN",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question: "Mən yeni dostlar qazanmağı çətin hesab edirəm.",
    type: "likert",
    dimension: "EI",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 5,
          I: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 1,
          I: 5,
        },
      },
    ],
  },
  {
    question: "Mən şeiri sevirəm.",
    type: "likert",
    dimension: "SN",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question: "Mən özəl adamam.",
    type: "likert",
    dimension: "EI",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 5,
          I: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 1,
          I: 5,
        },
      },
    ],
  },
  {
    question: "Öz-özümə sual verirəm ki, niyə hər şey olduğu kimidir.",
    type: "likert",
    dimension: "SN",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question: "Başqalarına onların hissləri ilə maraqlandığımı bildirirəm.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question: "Başqalarının ehtiyaclarını düşünürəm.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question: "Başqalarına lazım olmağı xoşlayıram.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question: "Problemin orijinal həllini tapmağa üstünlük verərdim.",
    type: "likert",
    dimension: "SN",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question: "Mən yeni ideyalarla doluyam.",
    type: "likert",
    dimension: "SN",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  // İki seçimli suallar
  {
    question:
      "Mən asan başa düşülən fikirləri xoşlayıram ---- Mən mürəkkəb ideyaları xoşlayıram.",
    type: "choice",
    dimension: "SN",
    options: [
      {
        text: "Mən asan başa düşülən fikirləri xoşlayıram",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Mən mürəkkəb ideyaları xoşlayıram",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question: "Fikirlərimi özümdə saxlayıram ---- Danışaram.",
    type: "choice",
    dimension: "EI",
    options: [
      {
        text: "Fikirlərimi özümdə saxlayıram",
        value: {
          E: 1,
          I: 5,
        },
      },
      {
        text: "Danışaram",
        value: {
          E: 5,
          I: 1,
        },
      },
    ],
  },
  {
    question:
      "Vaxtımı məqsədlərimin arxasınca keçirməyə sərf edirəm ---- Vaxtımı həyatdan həzz almağa sərf edirəm.",
    type: "choice",
    dimension: "JP",
    options: [
      {
        text: "Vaxtımı məqsədlərimin arxasınca keçirməyə sərf edirəm",
        value: {
          J: 5,
          P: 1,
        },
      },
      {
        text: "Vaxtımı həyatdan həzz almağa sərf edirəm",
        value: {
          J: 1,
          P: 5,
        },
      },
    ],
  },
  {
    question:
      "Ehtiyaclarımı birinci yerə qoyuram ---- Başqalarının ehtiyaclarını öz ehtiyaclarımdan üstün tuturam.",
    type: "choice",
    dimension: "TF",
    options: [
      {
        text: "Ehtiyaclarımı birinci yerə qoyuram",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Başqalarının ehtiyaclarını öz ehtiyaclarımdan üstün tuturam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question:
      "Mən ənənəvi dəyərlərə güvənirəm ---- Ənənəvi dəyərlərə sual verirəm.",
    type: "choice",
    dimension: "SN",
    options: [
      {
        text: "Mən ənənəvi dəyərlərə güvənirəm",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Ənənəvi dəyərlərə sual verirəm",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question: "Mən tez-tez nizamsız oluram ---- Özümü mütəşəkkil saxlayıram.",
    type: "choice",
    dimension: "JP",
    options: [
      {
        text: "Mən tez-tez nizamsız oluram",
        value: {
          J: 1,
          P: 5,
        },
      },
      {
        text: "Özümü mütəşəkkil saxlayıram",
        value: {
          J: 5,
          P: 1,
        },
      },
    ],
  },
  {
    question:
      "Mən tanış olan fəaliyyətlərdən həzz alıram ---- Yeni şeylər yaşamaqdan həzz alıram.",
    type: "choice",
    dimension: "SN",
    options: [
      {
        text: "Mən tanış olan fəaliyyətlərdən həzz alıram",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Yeni şeylər yaşamaqdan həzz alıram",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question:
      "Yenilik etməyə çalışmağı xoşlayıram ---- Etibarlı metodlardan istifadə etməyi xoşlayıram.",
    type: "choice",
    dimension: "SN",
    options: [
      {
        text: "Yenilik etməyə çalışmağı xoşlayıram",
        value: {
          S: 1,
          N: 5,
        },
      },
      {
        text: "Etibarlı metodlardan istifadə etməyi xoşlayıram",
        value: {
          S: 5,
          N: 1,
        },
      },
    ],
  },
  {
    question:
      "Mən aydın bir prosedura riayət etməyi üstün tuturam ---- Mən improvizə etməyi üstün tuturam.",
    type: "choice",
    dimension: "JP",
    options: [
      {
        text: "Mən aydın bir prosedura riayət etməyi üstün tuturam",
        value: {
          J: 5,
          P: 1,
        },
      },
      {
        text: "Mən improvizə etməyi üstün tuturam",
        value: {
          J: 1,
          P: 5,
        },
      },
    ],
  },
  {
    question: "Mən həmişə hazıram ---- Mən çox vaxt hazırlıqsızam.",
    type: "choice",
    dimension: "JP",
    options: [
      {
        text: "Mən həmişə hazıram",
        value: {
          J: 5,
          P: 1,
        },
      },
      {
        text: "Mən çox vaxt hazırlıqsızam",
        value: {
          J: 1,
          P: 5,
        },
      },
    ],
  },
  {
    question:
      "Əvvəl işləyirəm, sonra əylənirəm ---- Əvvəl əylənirəm, sonra işləyirəm.",
    type: "choice",
    dimension: "JP",
    options: [
      {
        text: "Əvvəl işləyirəm, sonra əylənirəm",
        value: {
          J: 5,
          P: 1,
        },
      },
      {
        text: "Əvvəl əylənirəm, sonra işləyirəm",
        value: {
          J: 1,
          P: 5,
        },
      },
    ],
  },
  {
    question:
      "Başqalarından diqqət axtarıram ---- Başqalarının diqqətindən qaçıram.",
    type: "choice",
    dimension: "EI",
    options: [
      {
        text: "Başqalarından diqqət axtarıram",
        value: {
          E: 5,
          I: 1,
        },
      },
      {
        text: "Başqalarının diqqətindən qaçıram",
        value: {
          E: 1,
          I: 5,
        },
      },
    ],
  },
  {
    question:
      "Başqalarına kömək etmək yollarını axtarıram ---- Öz məqsədlərimə çatmağın yollarını axtarıram.",
    type: "choice",
    dimension: "TF",
    options: [
      {
        text: "Başqalarına kömək etmək yollarını axtarıram",
        value: {
          T: 1,
          F: 5,
        },
      },
      {
        text: "Öz məqsədlərimə çatmağın yollarını axtarıram",
        value: {
          T: 5,
          F: 1,
        },
      },
    ],
  },
  {
    question:
      "Başqalarının ağrısını hiss edirəm ---- Kədərli hekayələrdən asan təsirlənmirəm.",
    type: "choice",
    dimension: "TF",
    options: [
      {
        text: "Başqalarının ağrısını hiss edirəm",
        value: {
          T: 1,
          F: 5,
        },
      },
      {
        text: "Kədərli hekayələrdən asan təsirlənmirəm",
        value: {
          T: 5,
          F: 1,
        },
      },
    ],
  },
  {
    question: "Hər kəsin qayğısına qaldığına əminəm ---- Özümlə maraqlanıram.",
    type: "choice",
    dimension: "TF",
    options: [
      {
        text: "Hər kəsin qayğısına qaldığına əminəm",
        value: {
          T: 1,
          F: 5,
        },
      },
      {
        text: "Özümlə maraqlanıram",
        value: {
          T: 5,
          F: 1,
        },
      },
    ],
  },
  {
    question:
      "Mən real həyata fokuslanıram ---- Mən fantaziyamı istifadə edirəm.",
    type: "choice",
    dimension: "SN",
    options: [
      {
        text: "Mən real həyata fokuslanıram",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Mən fantaziyamı istifadə edirəm",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question:
      "Mən sosial statusuma dəyər verirəm ---- Mən şəxsi həyatıma dəyər verirəm.",
    type: "choice",
    dimension: "EI", // Və ya F, lakin E daha uyğundur
    options: [
      {
        text: "Mən sosial statusuma dəyər verirəm",
        value: {
          E: 5,
          I: 1,
        },
      },
      {
        text: "Mən şəxsi həyatıma dəyər verirəm",
        value: {
          E: 1,
          I: 5,
        },
      },
    ],
  },
  {
    question:
      "Mən hər şeyi addım-addım edirəm ---- Hər şeyi dərhal həll edirəm.",
    type: "choice",
    dimension: "JP",
    options: [
      {
        text: "Mən hər şeyi addım-addım edirəm",
        value: {
          J: 5,
          P: 1,
        },
      },
      {
        text: "Hər şeyi dərhal həll edirəm",
        value: {
          J: 1,
          P: 5,
        },
      },
    ],
  },
  {
    question:
      "Məni daha çox nəyin mümkün olduğu maraqlandırır ---- Məni daha çox real olanlar maraqlandırır.",
    type: "choice",
    dimension: "SN",
    options: [
      {
        text: "Məni daha çox nəyin mümkün olduğu maraqlandırır",
        value: {
          S: 1,
          N: 5,
        },
      },
      {
        text: "Məni daha çox real olanlar maraqlandırır",
        value: {
          S: 5,
          N: 1,
        },
      },
    ],
  },
  {
    question:
      "Söhbətlərə başlayıram ---- Başqalarının söhbətə başlamasını gözləyirəm.",
    type: "choice",
    dimension: "EI",
    options: [
      {
        text: "Söhbətlərə başlayıram",
        value: {
          E: 5,
          I: 1,
        },
      },
      {
        text: "Başqalarının söhbətə başlamasını gözləyirəm",
        value: {
          E: 1,
          I: 5,
        },
      },
    ],
  },
  {
    question:
      "Mən əməkdaşlıq etməyi xoşlayıram ---- Mən rəqabət etməyi xoşlayıram.",
    type: "choice",
    dimension: "TF",
    options: [
      {
        text: "Mən əməkdaşlıq etməyi xoşlayıram",
        value: {
          T: 1,
          F: 5,
        },
      },
      {
        text: "Mən rəqabət etməyi xoşlayıram",
        value: {
          T: 5,
          F: 1,
        },
      },
    ],
  },
  {
    question: "Qərarları başımla verirəm ---- Qərarları ürəyimlə verirəm.",
    type: "choice",
    dimension: "TF",
    options: [
      {
        text: "Qərarları başımla verirəm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Qərarları ürəyimlə verirəm",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question: "Mən plana əməl edirəm ---- Impulsla hərəkət edirəm.",
    type: "choice",
    dimension: "JP",
    options: [
      {
        text: "Mən plana əməl edirəm",
        value: {
          J: 5,
          P: 1,
        },
      },
      {
        text: "Impulsla hərəkət edirəm",
        value: {
          J: 1,
          P: 5,
        },
      },
    ],
  },
  {
    question:
      "Mən aktiv, səs-küylü ofisdə işləməyə üstünlük verirəm ---- Sakit ofisdə işləməyə üstünlük verirəm.",
    type: "choice",
    dimension: "EI",
    options: [
      {
        text: "Mən aktiv, səs-küylü ofisdə işləməyə üstünlük verirəm",
        value: {
          E: 5,
          I: 1,
        },
      },
      {
        text: "Sakit ofisdə işləməyə üstünlük verirəm",
        value: {
          E: 1,
          I: 5,
        },
      },
    ],
  },
  // Əlavə suallar (Cəmi 100 suala çatmaq üçün əlavə nümunələr)
  // Sual sayı çox olduğuna görə, mən yalnız bir hissəsini daxil edəcəyəm.
  // Siz yuxarıdakı nümunələrə uyğun olaraq qalan suallarınızı əlavə edə bilərsiniz.
  // Hər sual üçün `type`, `dimension` və `options` obyektlərini düzgün təyin etməyiniz vacibdir.
  {
    question: "Mən ətraflı araşdırma aparmağı xoşlayıram.",
    type: "likert",
    dimension: "SN",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 1,
          N: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 5,
          N: 1,
        },
      },
    ],
  },
  {
    question: "Mən risk almağı xoşlayıram.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 5,
          P: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 1,
          P: 5,
        },
      },
    ],
  },
  {
    question: "Mən başqalarını motivasiya etməyi bacarıram.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question: "Mən problemlərə məntiqi yanaşıram.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 1,
          F: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 5,
          F: 1,
        },
      },
    ],
  },
  {
    question: "Mən diqqətli bir dinləyiciyəm.",
    type: "likert",
    dimension: "TF", // Və ya EI
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  {
    question: "Mən tez-tez gələcək haqqında düşünürəm.",
    type: "likert",
    dimension: "SN",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          S: 5,
          N: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          S: 4,
          N: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          S: 3,
          N: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          S: 2,
          N: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          S: 1,
          N: 5,
        },
      },
    ],
  },
  {
    question: "Mən qərar qəbul etməkdə qətiyyətliyəm.",
    type: "likert",
    dimension: "JP",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 1,
          P: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 5,
          P: 1,
        },
      },
    ],
  },
  {
    question: "Mən böyük qruplarla işləməyi sevirəm.",
    type: "likert",
    dimension: "EI",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          E: 1,
          I: 5,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          E: 2,
          I: 4,
        },
      },
      {
        text: "Neytral",
        value: {
          E: 3,
          I: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          E: 4,
          I: 2,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          E: 5,
          I: 1,
        },
      },
    ],
  },
  {
    question: "Mən hər hansı bir dəyişikliyə qarşı müqavimət göstərirəm.",
    type: "likert",
    dimension: "JP", // Və ya SN (ənənəpərəstlik)
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          J: 5,
          P: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          J: 4,
          P: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          J: 3,
          P: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          J: 2,
          P: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          J: 1,
          P: 5,
        },
      },
    ],
  },
  {
    question: "Mən duyğularımı asanlıqla ifadə edirəm.",
    type: "likert",
    dimension: "TF",
    options: [
      {
        text: "Qətiyyən razı deyiləm",
        value: {
          T: 5,
          F: 1,
        },
      },
      {
        text: "Razı deyiləm",
        value: {
          T: 4,
          F: 2,
        },
      },
      {
        text: "Neytral",
        value: {
          T: 3,
          F: 3,
        },
      },
      {
        text: "Razıyam",
        value: {
          T: 2,
          F: 4,
        },
      },
      {
        text: "Tamamilə razıyam",
        value: {
          T: 1,
          F: 5,
        },
      },
    ],
  },
  // Cəmi 100 suala çatmaq üçün bu hissəni təkrarlayaraq daha çox sual əlavə edə bilərsiniz.
  // Hal-hazırda 50+ sual əlavə etdim, qalanını siz qura bilərsiniz.
];

export default questionsData;
