import { faker } from "@faker-js/faker";
import { QuestionType } from "./types";

const getFakeRadioOption = (): { value: string; name: string } => {
  const option = faker.science.chemicalElement();
  return { value: option.symbol, name: option.name };
};

const getFakeMultipleOption = (): { name: string; checked: boolean } => {
  const option = faker.science.chemicalElement();
  return { name: option.name, checked: false };
};

const questions = [
  {
    type: QuestionType.Radio,
    description: faker.lorem.sentences(4),
    options: [getFakeRadioOption(), getFakeRadioOption(), getFakeRadioOption()],
    value: "",
  },
  {
    type: QuestionType.Radio,
    description: faker.lorem.sentences(4),
    options: [getFakeRadioOption(), getFakeRadioOption(), getFakeRadioOption()],
    value: "",
  },
  {
    type: QuestionType.Radio,
    description: faker.lorem.sentences(4),
    options: [getFakeRadioOption(), getFakeRadioOption(), getFakeRadioOption()],
    value: "",
  },
  {
    type: QuestionType.Radio,
    description: faker.lorem.sentences(4),
    options: [getFakeRadioOption(), getFakeRadioOption(), getFakeRadioOption()],
    value: "",
  },
  {
    type: QuestionType.Multiple,
    description: faker.lorem.sentences(4),
    options: [
      getFakeMultipleOption(),
      getFakeMultipleOption(),
      getFakeMultipleOption(),
    ],
    value: "",
  },
  {
    type: QuestionType.Multiple,
    description: faker.lorem.sentences(4),
    options: [
      getFakeMultipleOption(),
      getFakeMultipleOption(),
      getFakeMultipleOption(),
    ],
    value: "",
  },
  {
    type: QuestionType.Multiple,
    description: faker.lorem.sentences(4),
    options: [
      getFakeMultipleOption(),
      getFakeMultipleOption(),
      getFakeMultipleOption(),
    ],
    value: "",
  },
  {
    type: QuestionType.Multiple,
    description: faker.lorem.sentences(4),
    options: [
      getFakeMultipleOption(),
      getFakeMultipleOption(),
      getFakeMultipleOption(),
    ],
    value: "",
  },
  {
    type: QuestionType.ShortAnswer,
    description: faker.lorem.sentences(4),
    value: "",
  },
  {
    type: QuestionType.ShortAnswer,
    description: faker.lorem.sentences(4),
    value: "",
  },
  {
    type: QuestionType.ShortAnswer,
    description: faker.lorem.sentences(4),
    value: "",
  },
  {
    type: QuestionType.ShortAnswer,
    description: faker.lorem.sentences(4),
    value: "",
  },
  {
    type: QuestionType.LongAnswer,
    description: faker.lorem.sentences(6),
    value: "",
  },
  {
    type: QuestionType.LongAnswer,
    description: faker.lorem.sentences(6),
    value: "",
  },
  {
    type: QuestionType.LongAnswer,
    description: faker.lorem.sentences(6),
    value: "",
  },
  {
    type: QuestionType.LongAnswer,
    description: faker.lorem.sentences(6),
    value: "",
  },
];

export default questions;
