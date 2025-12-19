import React, { useState } from "react";

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="writepage-container">
      <div className="writepage-content">
        <h1>글 작성</h1>

        <div className="form-group">
          <label htmlFor="title">제목</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
            className="title-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요"
            className="content-textarea"
            rows={10}
          />
        </div>

        <div className="button-group">
          <button className="submit-btn">저장</button>
          <button className="cancel-btn">취소</button>
        </div>
      </div>
    </div>
  );
}
