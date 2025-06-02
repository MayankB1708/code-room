import { useState } from "react";
import { CODING_QUESTIONS, LANGUAGES } from "@/constants";
import { JUDGE0_LANGUAGE_MAP } from "@/lib/languageMap";
import Editor from "@monaco-editor/react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import {
    ScrollArea,
    ScrollBar
} from "./ui/scroll-area";
import {
    AlertCircleIcon,
    BookIcon,
    LightbulbIcon
} from "lucide-react";
import {
    Card,
    CardHeader,
    CardContent,
    CardTitle
} from "./ui/card";

function CodeEditor() {
    const [selectedQuestion, setSelectedQuestion] = useState(CODING_QUESTIONS[0]);
    const [language, setLanguage] = useState<"javascript" | "python" | "java" | "cpp" | "c">(LANGUAGES[0].id);
    const [code, setCode] = useState(selectedQuestion.starterCode[language]);
    const [output, setOutput] = useState('');
    const [isRunning, setIsRunning] = useState(false);

    const handleQuestionChange = (questionId: string) => {
        const question = CODING_QUESTIONS.find(q => q.id === questionId)!;
        setSelectedQuestion(question);
        setCode(question.starterCode[language]);
    };

    const handleLanguageChange = (newLang: "javascript" | "python" | "java" | "cpp" | "c") => {
        setLanguage(newLang);
        setCode(selectedQuestion.starterCode[newLang]);
    };

    const handleRunCode = async () => {
        setIsRunning(true);
        setOutput("Running...");

        const payload = {
            source_code: code,
            language_id: JUDGE0_LANGUAGE_MAP[language],
            stdin: "",
            redirect_stderr_to_stdout: false,
            wait: true,
        };

        try {
            const res = await fetch("/api/execute", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            console.log("Judge0 response:", data); // optional: debug

            let result = "";

            // Always show status if available
            if (data.status?.description) {
                result += `Status: ${data.status.description}\n\n`;
            }

            // Normalize all outputs
            const compileOutput = data.compile_output ?? "";
            const stderr = data.stderr ?? "";
            const stdout = data.stdout ?? "";

            // Show compile error if present
            if (compileOutput.trim() !== "") {
                result += `Compilation Error:\n${compileOutput}`;
            }
            // Show runtime error if present
            else if (stderr.trim() !== "") {
                result += `Runtime Error:\n${stderr}`;
            }
            // Show program output if present
            else if (stdout.trim() !== "") {
                result += `Output:\n${stdout}`;
            }
            // Nothing was returned
            else {
                result += "No output returned. There might be an internal issue or empty print.";
            }

            setOutput(result.trim());
        } catch (error) {
            setOutput("Execution failed. Please try again.");
            console.error("Code execution error:", error);
        } finally {
            setIsRunning(false);
        }
    };




    return (
        <ResizablePanelGroup direction="vertical" className="min-h-[calc(100vh-4rem)]">
            {/* Top Panel with Problem & Metadata */}
            <ResizablePanel>
                <ScrollArea className="h-full">
                    <div className="p-6">
                        <div className="max-w-4xl mx-auto space-y-6">

                            {/* HEADER */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="space-y-1">
                                    <h2 className="text-2xl font-semibold tracking-tight">{selectedQuestion.title}</h2>
                                    <p className="text-sm text-muted-foreground">Choose your language and solve the problem</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Select value={selectedQuestion.id} onValueChange={handleQuestionChange}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Select question" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {CODING_QUESTIONS.map((q) => (
                                                <SelectItem key={q.id} value={q.id}>{q.title}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>

                                    <Select value={language} onValueChange={handleLanguageChange}>
                                        <SelectTrigger className="w-[150px]">
                                            <SelectValue>
                                                <div className="flex items-center gap-2">
                                                    <img src={`/${language}.png`} alt={language} className="w-5 h-5 object-contain" />
                                                    {LANGUAGES.find((l) => l.id === language)?.name}
                                                </div>
                                            </SelectValue>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {LANGUAGES.map((lang) => (
                                                <SelectItem key={lang.id} value={lang.id}>
                                                    <div className="flex items-center gap-2">
                                                        <img src={`/${lang.id}.png`} alt={lang.name} className="w-5 h-5 object-contain" />
                                                        {lang.name}
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* PROBLEM DESCRIPTION */}
                            <Card>
                                <CardHeader className="flex flex-row items-center gap-2">
                                    <BookIcon className="h-5 w-5 text-primary/80" />
                                    <CardTitle>Problem Description</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="whitespace-pre-line">{selectedQuestion.description}</p>
                                </CardContent>
                            </Card>

                            {/* EXAMPLES */}
                            <Card>
                                <CardHeader className="flex flex-row items-center gap-2">
                                    <LightbulbIcon className="h-5 w-5 text-yellow-500" />
                                    <CardTitle>Examples</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ScrollArea>
                                        <div className="p-4 space-y-4">
                                            {selectedQuestion.examples.map((example, index) => (
                                                <div key={index} className="space-y-2">
                                                    <p className="font-medium text-sm">Example {index + 1}:</p>
                                                    <pre className="bg-muted/50 p-3 rounded-lg text-sm font-mono whitespace-pre-wrap">
                                                        Input: {example.input}
                                                        <br />
                                                        Output: {example.output}
                                                        {example.explanation && (
                                                            <>
                                                                <br />
                                                                <span className="text-muted-foreground">
                                                                    Explanation: {example.explanation}
                                                                </span>
                                                            </>
                                                        )}
                                                    </pre>
                                                </div>
                                            ))}
                                        </div>
                                    </ScrollArea>
                                </CardContent>
                            </Card>

                            {/* CONSTRAINTS */}
                            {selectedQuestion.constraints && (
                                <Card>
                                    <CardHeader className="flex flex-row items-center gap-2">
                                        <AlertCircleIcon className="h-5 w-5 text-blue-500" />
                                        <CardTitle>Constraints</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="list-disc list-inside space-y-1.5 text-sm marker:text-muted-foreground">
                                            {selectedQuestion.constraints.map((constraint, index) => (
                                                <li key={index}>{constraint}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    </div>
                </ScrollArea>
            </ResizablePanel>

            <ResizableHandle withHandle />

            {/* Code Editor + Controls */}
            <ResizablePanel defaultSize={60}>
                <div className="flex flex-col h-full">
                    {/* Code Editor */}
                    <div className="flex-1">
                        <Editor
                            height="100%"
                            defaultLanguage={language}
                            language={language}
                            theme="vs-dark"
                            value={code}
                            onChange={(value) => setCode(value || "")}
                            options={{
                                minimap: { enabled: false },
                                fontSize: 18,
                                lineNumbers: "on",
                                scrollBeyondLastLine: false,
                                automaticLayout: true,
                                padding: { top: 16, bottom: 16 },
                                wordWrap: "on",
                                wrappingIndent: "indent",
                            }}
                        />
                    </div>

                    {/* Run Button */}
                    <div className="p-4 bg-muted border-t border-border">
                        <Button onClick={handleRunCode} disabled={isRunning}>
                            {isRunning ? "Running..." : "Run Code"}
                        </Button>
                    </div>

                    {/* Output Box */}
                    <div className="p-4 bg-black text-white border-t border-border resize-y min-h-[10rem] max-h-[70vh] overflow-auto rounded-md">
                        <p className="text-sm font-semibold mb-2">Output:</p>
                        <pre className="text-sm whitespace-pre-wrap break-words">{output}</pre>
                    </div>



                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}

export default CodeEditor;
