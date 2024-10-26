import { Switch } from "./components/ui/switch";

function App() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="h-9 inline-grid grid-cols-[1fr_1fr] items-center relative">
        <Switch className="absolute inset-0 w-auto rounded-lg [&_span]:rounded-md h-[inherit] [&_span]:h-full [&_span]:w-1/2 data-[state=checked]:[&_span]:translate-x-full data-[state=checked]:bg-input data-[state=unchecked]:bg-input" />
        <span className="relative px-4 pointer-events-none text-center font-medium peer-data-[state=checked]:text-muted-foreground">
          Option 1
        </span>
        <span className="relative px-4 pointer-events-none text-center font-medium peer-data-[state=unchecked]:text-muted-foreground">
          Option 2
        </span>
      </div>
    </div>
  );
}

export default App;
