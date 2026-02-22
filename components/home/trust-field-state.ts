export type TrustFieldState = "calibrating" | "stable" | "inspecting" | "mapping" | "emitting";

export type TrustFieldAction =
  | { type: "SCROLL_UPDATED"; depth: number }
  | { type: "MODE_UPDATED"; mode: "standard" | "console" }
  | { type: "PANEL_UPDATED"; panel: "understand" | "inspect" | "architecture" | "proof" | "adoption" };

export type TrustFieldContext = {
  mode: "standard" | "console";
  panel: "understand" | "inspect" | "architecture" | "proof" | "adoption";
  scrollDepth: number;
};

export const initialTrustFieldContext: TrustFieldContext = {
  mode: "standard",
  panel: "understand",
  scrollDepth: 0
};

export function resolveTrustFieldState(context: TrustFieldContext): TrustFieldState {
  if (context.mode === "console") {
    if (context.panel === "proof") {
      return "emitting";
    }

    if (context.panel === "architecture" || context.panel === "adoption") {
      return "mapping";
    }

    if (context.panel === "inspect") {
      return "inspecting";
    }

    return "calibrating";
  }

  return "stable";
}

export function trustFieldReducer(context: TrustFieldContext, action: TrustFieldAction): TrustFieldContext {
  if (action.type === "SCROLL_UPDATED") {
    if (context.scrollDepth === action.depth) {
      return context;
    }

    return { ...context, scrollDepth: action.depth };
  }

  if (action.type === "MODE_UPDATED") {
    if (context.mode === action.mode) {
      return context;
    }

    return { ...context, mode: action.mode };
  }

  if (context.panel === action.panel) {
    return context;
  }

  return { ...context, panel: action.panel };
}
