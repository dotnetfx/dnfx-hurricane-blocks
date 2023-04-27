import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../"

const meta = {
    title: "UI Blocks/Accordion",
    component:
        Accordion,
    tags: ["docsPage"],
    argTypes: {
        title: {
            control: { type: "text" }
        },
        description: {
            control: { type: "text" }
        }
    }
}

export default meta

export const Primary = {
    args: {
        title: "Accordion Title",
        description: "Lorum ipsum dolor sit amet."
    }
}
