const firstRibbonWords = [
  "爱你",
  "你是最好的",
  "我相信你",
  "你会成功的",
  "我真的很感激你",
];

const secondRibbonWords = [
  "决不放弃",
  "你真聪明",
  "你真漂亮",
  "你很温柔",
  "你唱得很好",
];

export const Ribbons: React.FC = () => (
  <>
    <div
      className="ribbon"
      style={{ marginBottom: "20px" }}
    >
      <div className="ribbon-track ribbon-track-left">
        <div className="ribbon-content">
          {firstRibbonWords.map((word) => (
            <span key={`${word}`}>{word}</span>
          ))}
        </div>
        <div className="ribbon-content">
          {firstRibbonWords.map((word) => (
            <span key={`${word}-reverse`}>{word}</span>
          ))}
        </div>
      </div>
    </div>
    <div className="ribbon ">
      <div className="ribbon-track ribbon-track-right">
        <div className="ribbon-content">
          {secondRibbonWords.map((word) => (
            <span key={`${word}`}>{word}</span>
          ))}
        </div>
        <div className="ribbon-content">
          {secondRibbonWords.map((word) => (
            <span key={`${word}-reverse`}>{word}</span>
          ))}
        </div>
      </div>
    </div>
  </>
);
