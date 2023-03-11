import EditorLayout from "@/components/editor/EditorLayout"
import EditorContextProvider from "@/shared/context/EditorContext"

const Editor = () => {
    return (
        <EditorContextProvider>
            <EditorLayout></EditorLayout>
        </EditorContextProvider>
    )
}

export default Editor