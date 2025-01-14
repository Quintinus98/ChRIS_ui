import { FeedFile, PluginInstance } from "@fnndsc/chrisapi";
import { DataNode } from "../../../../store/explorer/types";

export interface FileBrowserProps {
  pluginFilesPayload: {
    files: FeedFile[];
    folders: string[];
    error: any;
    path: string;
  };
  handleFileClick: (path: string) => void;
  selected: PluginInstance;
  filesLoading: boolean;
}

export interface FileBrowserState {
  directory: DataNode;
  breadcrumbs: DataNode[];
  currentFile: DataNode[];
  previewingFile?: DataNode; // file selected for preview
}

export interface Label {
  [key: string]: boolean;
}
