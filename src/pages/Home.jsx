import React from "react";
import { showFormattedDate } from "../utils/index";
import { getActiveNotes, deleteNote, archiveNote } from "../utils/local-data";
import Navigation from "../components/Navigation";
import NoteList from "../components/NoteList";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getActiveNotes(),
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
    }
    
    onDeleteHandler(id){
        deleteNote(id);
        this.setState(()=>{
            return{
                notes: getActiveNotes()
            }
        });
    }

    onArchiveHandler(id){
        archiveNote(id);
        this.setState(()=>{
            return{
                notes: getActiveNotes()
            }
        });
    }

    render() {
        return (
            <>
                <div className="notes-app">
                    <section className="notes-app-body">
                        <NoteList
                            id={this.state.id}
                            notes={this.state.notes}
                            onDelete={this.onDeleteHandler}
                            onArchive= {this.onArchiveHandler} 
                        />
                    </section>
                </div>
            </>
        )
    }
}

export default Home;