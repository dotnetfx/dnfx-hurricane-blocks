import { Card } from "../";

const meta = {
    title: "Example/Card",
    component: Card,
    tags: ["docsPage"],
    argTypes: {
        title: {
            control: { type: "text" },
        },
        description: {
            control: { type: "text" },
        },
    },
}

export default meta;

export const Primary = {
    args: {
        title: "Card Title",
        description: "This is a card",
    },
};
