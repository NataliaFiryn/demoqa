import config from '../playwright.config';
const baseURL = config.use?.baseURL;

export class URLS {
  elements: string = `${baseURL}/elements`;
  forms: string = `${baseURL}/forms`;
  alertsWindows: string = `${baseURL}/alertsWindows`;
  widgets: string = `${baseURL}/widgets`;
  interactions: string = `${baseURL}/interaction`;
  bookStore: string = `${baseURL}/books`;

  textBox: string = `${baseURL}/text-box`;
  checkBox: string = `${baseURL}/checkbox`;
  radioButton: string = `${baseURL}/radio-button`;
  webTables: string = `${baseURL}/webtables`;
  buttons: string = `${baseURL}/buttons`;
  links: string = `${baseURL}/links`;
  broken: string = `${baseURL}/broken`;
  uploadDownload: string = `${baseURL}/upload-download`;
  dynamicProperties: string = `${baseURL}/dynamic-properties`;

  practiceForm: string = `${baseURL}/automation-practice-form`;

  browserWindows: string = `${baseURL}/browser-windows`;
  alerts: string = `${baseURL}/alerts`;
  frames: string = `${baseURL}/frames`;
  nestedframes: string = `${baseURL}/nestedframes`;
  modalDialogs: string = `${baseURL}/modal-dialogs`;

  accordian: string = `${baseURL}/accordian`;
  autoComplete: string = `${baseURL}/auto-complete`;
  datePicker: string = `${baseURL}/date-picker`;
  slider: string = `${baseURL}/slider`;
  progressBar: string = `${baseURL}/progress-bar`;
  tabs: string = `${baseURL}/tabs`;
  toolTips: string = `${baseURL}/tool-tips`;
  menu: string = `${baseURL}/menu`;
  selectMenu: string = `${baseURL}/select-menu`;

  sortable: string = `${baseURL}/sortable`;
  selectable: string = `${baseURL}/selectable`;
  resizable: string = `${baseURL}/resizable`;
  droppable: string = `${baseURL}/droppable`;
  dragabble: string = `${baseURL}/dragabble`;

  login: string = `${baseURL}/login`;
  books: string = `${baseURL}/books`;
  profile: string = `${baseURL}/profile`;
}

export default new URLS();
