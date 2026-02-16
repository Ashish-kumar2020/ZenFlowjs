import React, { useState } from "react";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { Button } from "./ui/button";
import { Save, FileText, Plus, Trash2, Edit } from "lucide-react";

const Notes = () => {
  const [allNotes, setAllNotes] = useState(() => {
    const saved = localStorage.getItem("allNotes");
    return saved ? JSON.parse(saved) : [];
  });

  const [currentNoteId, setCurrentNoteId] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  
  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "heading",
        content: "Welcome to your notes",
      },
      {
        type: "paragraph",
        content: "Start writing something amazing...",
      },
    ],
  });

  const createNewNote = () => {
    const newNote = {
      id: Date.now(),
      title: "Untitled Note",
      content: [
        {
          type: "heading",
          content: "Untitled Note",
        },
        {
          type: "paragraph",
          content: "Start writing...",
        },
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const updatedNotes = [...allNotes, newNote];
    setAllNotes(updatedNotes);
    localStorage.setItem("allNotes", JSON.stringify(updatedNotes));
    setCurrentNoteId(newNote.id);
    
   
    editor.replaceBlocks(editor.document, newNote.content);
  };


  const loadNote = (note) => {
    setCurrentNoteId(note.id);
    editor.replaceBlocks(editor.document, note.content);
  };


  const handleSave = () => {
    if (!currentNoteId) {
      // If no current note, create new one
      createNewNote();
      return;
    }

    setIsSaving(true);
    const blocks = editor.document;
    
    // Extract title from first heading or use first text
    let title = "Untitled Note";
    const firstBlock = blocks[0];
    if (firstBlock && firstBlock.content) {
      if (Array.isArray(firstBlock.content)) {
        title = firstBlock.content.map(item => item.text || "").join("").trim() || "Untitled Note";
      } else if (typeof firstBlock.content === 'string') {
        title = firstBlock.content.trim() || "Untitled Note";
      }
    }
    
    // Limit title length
    if (title.length > 50) {
      title = title.substring(0, 50) + "...";
    }

    const updatedNotes = allNotes.map((note) =>
      note.id === currentNoteId
        ? {
            ...note,
            title,
            content: blocks,
            updatedAt: new Date().toISOString(),
          }
        : note
    );

    setAllNotes(updatedNotes);
    localStorage.setItem("allNotes", JSON.stringify(updatedNotes));

    setTimeout(() => {
      setIsSaving(false);
    }, 500);
  };

  // Delete note
  const deleteNote = (id, e) => {
    e.stopPropagation();
    const updatedNotes = allNotes.filter((note) => note.id !== id);
    setAllNotes(updatedNotes);
    localStorage.setItem("allNotes", JSON.stringify(updatedNotes));

    if (currentNoteId === id) {
      setCurrentNoteId(null);
      editor.replaceBlocks(editor.document, [
        {
          type: "heading",
          content: "Welcome to your notes",
        },
        {
          type: "paragraph",
          content: "Start writing something amazing...",
        },
      ]);
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = Math.floor((now - date) / 1000);

    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
    return date.toLocaleDateString();
  };

  const currentNote = allNotes.find((note) => note.id === currentNoteId);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar - Notes List */}
      <div className="w-80 border-r border-zinc-800 bg-zinc-900/30 flex flex-col">
        <div className="p-4 border-b border-zinc-800">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-zinc-100">All Notes</h2>
            <Button
              size="sm"
              onClick={createNewNote}
              className="gap-2 bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/20 active:scale-95 transition-all duration-200"
            >
              <Plus className="w-4 h-4" />
              New
            </Button>
          </div>
          <p className="text-sm text-zinc-500">
            {allNotes.length} {allNotes.length === 1 ? "note" : "notes"}
          </p>
        </div>

        <div className="flex-1 overflow-y-auto">
          {allNotes.length === 0 ? (
            <div className="p-6 text-center">
              <FileText className="w-12 h-12 text-zinc-700 mx-auto mb-3" />
              <p className="text-sm text-zinc-500">No notes yet</p>
              <p className="text-xs text-zinc-600 mt-1">
                Click "New" to create one
              </p>
            </div>
          ) : (
            <div className="p-2 space-y-1">
              {allNotes.map((note) => (
                <div
                  key={note.id}
                  onClick={() => loadNote(note)}
                  className={`
                    group p-3 rounded-lg cursor-pointer transition-all duration-200
                    ${
                      currentNoteId === note.id
                        ? "bg-indigo-600/20 border border-indigo-600/30"
                        : "bg-zinc-800/50 hover:bg-zinc-800 border border-transparent"
                    }
                  `}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`
                        font-medium text-sm mb-1 truncate
                        ${
                          currentNoteId === note.id
                            ? "text-zinc-100"
                            : "text-zinc-300"
                        }
                      `}
                      >
                        {note.title}
                      </h3>
                      <p className="text-xs text-zinc-500">
                        {formatDate(note.updatedAt)}
                      </p>
                    </div>
                    <button
                      onClick={(e) => deleteNote(note.id, e)}
                      className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-600/20 rounded transition-all duration-200"
                    >
                      <Trash2 className="w-4 h-4 text-red-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Editor Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b border-zinc-800 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-600/10 rounded-lg">
                <FileText className="w-5 h-5 text-indigo-500" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-zinc-100">
                  {currentNote ? currentNote.title : "Notes"}
                </h1>
                <p className="text-sm text-zinc-500 mt-0.5">
                  {currentNote
                    ? `Last updated: ${formatDate(currentNote.updatedAt)}`
                    : "Select or create a note"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                onClick={handleSave}
                disabled={isSaving}
                className={`gap-2 transition-all duration-200 ${
                  isSaving
                    ? "bg-zinc-700 text-zinc-400 cursor-not-allowed"
                    : "bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/20 active:scale-95"
                }`}
              >
                {isSaving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-zinc-400 border-t-transparent rounded-full animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Save
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Editor Container */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden hover:border-zinc-700 transition-colors">
              <div
                className="p-8 prose prose-invert max-w-none
                prose-headings:font-bold prose-headings:text-zinc-100
                prose-h1:text-4xl prose-h1:mb-6 prose-h1:bg-gradient-to-r prose-h1:from-indigo-400 prose-h1:to-purple-400 prose-h1:bg-clip-text prose-h1:text-transparent
                prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-zinc-200
                prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-zinc-300
                prose-p:text-base prose-p:leading-7 prose-p:mb-4 prose-p:text-zinc-400
                prose-strong:text-zinc-200 prose-strong:font-semibold
                prose-a:text-indigo-400 prose-a:no-underline prose-a:border-b prose-a:border-indigo-500/30 hover:prose-a:border-indigo-400 hover:prose-a:text-indigo-300 prose-a:transition-colors
                prose-code:text-sm prose-code:bg-zinc-800 prose-code:text-indigo-400 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:border prose-code:border-zinc-700
                prose-pre:bg-zinc-800/50 prose-pre:border prose-pre:border-zinc-700 prose-pre:rounded-xl prose-pre:shadow-inner
                prose-blockquote:border-l-4 prose-blockquote:border-indigo-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-zinc-400
                prose-ul:my-4 prose-ul:text-zinc-400
                prose-ol:my-4 prose-ol:text-zinc-400
                prose-li:my-2 prose-li:text-zinc-400
                prose-img:rounded-lg prose-img:shadow-lg prose-img:border prose-img:border-zinc-800
                prose-hr:border-zinc-800
                [&_.bn-editor]:min-h-[500px]
                [&_.bn-editor]:focus:outline-none
                [&_.bn-editor]:text-zinc-100
                [&_.bn-container]:!bg-transparent
                [&_.bn-toolbar]:!bg-zinc-800/50 [&_.bn-toolbar]:!border [&_.bn-toolbar]:!border-zinc-700 [&_.bn-toolbar]:!rounded-lg [&_.bn-toolbar]:!shadow-xl
                [&_.bn-editor]:selection:bg-indigo-600/30 [&_.bn-editor]:selection:text-zinc-100
                [&_.bn-editor_[data-content-type='paragraph']]:text-zinc-400
              "
              >
                <BlockNoteView editor={editor} theme="dark" />
              </div>
            </div>

            {/* Footer Info */}
            <div className="mt-6 text-center">
              <p className="text-sm text-zinc-500">
                Press{" "}
                <kbd className="px-2 py-1 text-xs font-medium bg-zinc-800 text-zinc-400 rounded border border-zinc-700 shadow-sm">
                  Cmd/Ctrl + /
                </kbd>{" "}
                for commands
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;