const END = '-END';
const MES = 'MEASURE'
const TITLE_STYLE = [
  "font-weight: bold",
  "color: GREEN",
  "font-size: 2rem"
].join(';')

const INFO_STYLE = [
  "color: red",
  "font-size: 1rem",
  "line-height: 1.4rem",
  "background-color: pink",
  "padding: 0.5rem",
  "text-decoration: wavy underline overline blue"
].join(';');

const DURA_STYLE = [
  "font-weight: bold",
  "color: GREEN",
  "font-size: 2rem",
  "line-height: 2.4rem",
  "text-decoration: underline"
].join(';');

const strGen = () => Math.random().toString(36);
const SPACER = () => console.log('\n\n');
const createPerfItems = () => {
  const perfBase = new Map();
  const settingsChangeTraces = new Map();
  let settings = {enableConsoleOutput: true};
  return (perfName) => {
    const sName = !perfName ? strGen() : perfName;
    const eName = `${sName}-${END}`;
    let endMarkCreated = false;
    performance.mark(sName);
    return {
      mark: () => {
        performance.mark(eName);
        endMarkCreated = true;
      },
      diff: () => {
        if(!endMarkCreated) throw new Error("End \'mark()\' function must be called before diff()");
        if(!settings.enableConsoleOutput) return;
        const measureTitle = `${sName}-${MES}`;
        const measurement = performance.measure(measureTitle, sName, eName);
        perfBase.set(sName, measurement);
        SPACER();
        console.group(`%cPerformance measurement for mark ::: ${sName}`, TITLE_STYLE);
        console.log(`%cduration for ${measureTitle} was %c~${measurement.duration}ms`, INFO_STYLE, DURA_STYLE);
        console.log("Full measurement Data :: ");
        console.dir(measurement);
        console.groupEnd();
        SPACER()
      },
      outputAll: () => {
        console.log("*needs formatting*: ALL PERF ITEMS ", perfBase);
        return perfBase
      },
      updateSettings: ({enableConsoleOutput = true}) => {
        const stack = new Error('Use Error as stack trace. Setting were updated in');
        settingsChangeTraces.set(strGen, {
          fullData: stack,
          updateCalledFrom: stack.stack.split('\n')[1] || stack.stack
        })
        settings = {...settings, enableConsoleOutput}
      },
      locateSettingsUpdateCalls: () => {
        console.log("All settings update calls in your code ", [...settingsChangeTraces])
        return settingsChangeTraces
      }
    }
  }
}

export const perfMark = createPerfItems();
