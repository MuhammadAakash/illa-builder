import { HTMLAttributes } from "react"
import { EditorConfiguration } from "codemirror"
import { ExpectedType } from "./utils"

export enum EditorModes {
  TEXT = "text/plain",
  SQL = "sql",
  JSON = "application/json",
  JAVASCRIPT = "javascript",
  TEXT_JS = "text-js",
  TEXT_SQL = "text-sql",
  SQL_JS = "sql-js",
}

export interface CodeEditorProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  mode: "TEXT_JS" | "SQL_JS" | "SQL" | "JAVASCRIPT" | "TEXT_SQL"
  value?: string
  expectedType: ExpectedType
  lineNumbers?: boolean
  readOnly?: boolean
  height?: string
  placeholder?: string
  onBlur?: () => void
  onChange?: (value: string, calcResult: any) => void
}

export enum DataType {
  OBJECT = "OBJECT",
  NUMBER = "NUMBER",
  ARRAY = "ARRAY",
  FUNCTION = "FUNCTION",
  BOOLEAN = "BOOLEAN",
  STRING = "STRING",
  UNKNOWN = "UNKNOWN",
}

export type FieldEntityInformation = {
  entityName?: string
  expectedType?: DataType
  entityType?: "ACTION" | "WIDGET" | "JSACTION"
  entityId?: string
  propertyPath?: string
}

export interface ResultPreview {
  state?: "default" | "error"
  type?: ExpectedType
  content?: string
}

export interface EditorInputState {
  focus?: boolean
  error: boolean
  height: string
}
