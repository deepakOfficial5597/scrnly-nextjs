import EditorLayout from "@/components/editor/EditorLayout"
import EditorPageSeo from "@/components/seo/editor.page"
import EditorContextProvider from "@/shared/context/EditorContext"

const Editor = () => {
    return (
        <EditorContextProvider>
            <EditorPageSeo />
            <EditorLayout></EditorLayout>
        </EditorContextProvider>
    )
}

export default Editor