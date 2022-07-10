import { createContext, useContext } from 'react'
import { EditableEditor } from '../plugin/editable-editor'

/**
 * A React context for sharing the editor object, in a way that re-renders the
 * context whenever changes occur.
 */

export const SlateContext = createContext<[EditableEditor] | null>(null)

/**
 * Get the current editor object from the React context.
 */
export const useSlate = (): EditableEditor => {
  const context = useContext(SlateContext)

  if (!context) {
    throw new Error(
      `The \`useSlate\` hook must be used inside the <Slate> component's context.`
    )
  }

  const [editor] = context
  return editor
}
