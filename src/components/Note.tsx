import { FC } from 'react';
import "../js/noteApp"
import "../css/Note.scss";

const Note: FC = () =>

    <>
      <div className="container Note">
      <h1>ノート</h1>

      <div className="container">
      <header className="header">
        <h1>Cross Nine</h1>
        <div className="run">
          {/* <p id="message" style="display:none;">AutoSave..</p> */}
          <p id="message">AutoSave..</p>
        </div>
      </header>
      <div className="org_text">
        <div className="mol_text">
          <h3>Area A</h3>
          <textarea className="kioku1 event" id="kioku1" data-kioku="A" name="kioku1" data-i="1" />
          <p>
            <input className="clear" id="clear1" data-clear="clearA" type="button" value="Delete A" />
          </p>
        </div>
        <div className="mol_text">
          <h3>Area B</h3>
          <textarea className="kioku2 event" id="kioku2" data-kioku="B" name="kioku2" data-i="2" />
          <p>
            <input className="clear" id="clear2" data-clear="clearB" type="button" value="Delete B" />
          </p>
        </div>
        <div className="mol_text">
          <h3>Area C</h3>
          <textarea className="kioku3 event" id="kioku3" data-kioku="C" name="kioku3" data-i="3" />
          <p>
            <input className="clear" id="clear3" data-clear="clearC" type="button" value="Delete C" />
          </p>
        </div>
        <div className="mol_text">
          <h3>Area D</h3>
          <textarea className="kioku4 event" id="kioku4" data-kioku="D" name="kioku4" data-i="4" />
          <p>
            <input className="clear" id="clear4" data-clear="clearD" type="button" value="Delete D" />
          </p>
        </div>
        <div className="mol_text">
          <h3>Area E</h3>
          <textarea className="kioku5 event" id="kioku5" data-kioku="E" name="kioku5" data-i="5" />
          <p>
            <input className="clear" id="clear5" data-clear="clearE" type="button" value="Delete E" />
          </p>
        </div>
        <div className="mol_text">
          <h3>Area F</h3>
          <textarea className="kioku6 event" id="kioku6" data-kioku="F" name="kioku6" data-i="6" />
          <p>
            <input className="clear" id="clear6" data-clear="clearF" type="button" value="Delete F" />
          </p>
        </div>
        <div className="mol_text">
          <h3>Area G</h3>
          <textarea className="kioku7 event" id="kioku7" data-kioku="G" name="kioku7" data-i="7" />
          <p>
            <input className="clear" id="clear7" data-clear="clearG" type="button" value="Delete G" />
          </p>
        </div>
        <div className="mol_text">
          <h3>Area H</h3>
          <textarea className="kioku8 event" id="kioku8" data-kioku="H" name="kioku8" data-i="8" />
          <p>
            <input className="clear" id="clear8" data-clear="clearH" type="button" value="Delete H" />
          </p>
        </div>
        <div className="mol_text">
          <h3>Area I</h3>
          <textarea className="kioku9 event" id="kioku9" data-kioku="I" name="kioku9" data-i="9" />
          <p>
            <input className="clear" id="clear9" data-clear="clearI" type="button" value="Delete I" />
          </p>
        </div>
        <div className="run_bottom">
          {/* <p id="message2" style="display:none;">AutoSave..</p> */}
          <p id="message2">AutoSave..</p>
        </div>
      </div>
    </div>
      </div>
    </>

;
export default Note;
