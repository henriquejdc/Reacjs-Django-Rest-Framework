import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Note } from './components/note';
import './styles/main.css'

const baseURL = 'http://127.0.0.1:8000'

const App = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [notes, setNotes] = useState([])

  const createNote = async (event) => {
    event.preventDefault();

    const new_request = new Request(
        `${baseURL}/notes/`,
        {
            body:JSON.stringify({title, content}),
            headers:{'Content-Type':'Application/Json'},
            method:'POST'
        }
      );
      
      const response = await fetch(new_request);
      const data = await response.json();
      console.log(response)

      if (response.ok)
      {
        console.log(data);
        setTitle('');
        setContent('');
        setModalVisible(!modalVisible);
        getAllnotes();
      }
      else
      {
        console.log('Failed Network Request');
      }
  }

  const getAllnotes = async () => {
    const response = await fetch(`${baseURL}/notes/`);
    const data = await response.json()    
    response.ok ? setNotes(data) : console.log('Failed Network Request');
  }

  useEffect(() => {getAllnotes()}, [])

  const deleteItem = async (noteId) => {
    const response = await fetch(`${baseURL}/notes/${noteId}/`, {method:'DELETE'});
    response.ok ? console.log(response.status) : console.log('Failed Network Request');
    getAllnotes();
  }
  
  return (
    <div>
      <div className='header'>
        <div className='logo'>
          <p className='title'>
            Guest Book
          </p>
        </div>
        <div className='add-section'>
          <div
            onClick={() => setModalVisible(!modalVisible)} 
            className='add-btn' 
            href='#'>Add Note</div>
        </div>
      </div>
      {
        notes.length > 0 ?
        <div className='note-list'>        
          {
            notes.map(
              (item) => (
                <Note 
                  title={item.title} 
                  content={item.content}
                  onclick={() => deleteItem(item.id)}
                  key={item.id}
                  />
              )
            )
          }
        </div>
        :
        <div className='notes'>
          <p className='centerText'>No Notes</p>
        </div>
      }
      <div className={modalVisible ? 'modal':'modal-not-visible'}>
        <div className='form'>
          <div className='form-header'>
            <div>
              <p className='form-header-text'>Create Note</p>
            </div>
            <div>
              <div 
                onClick={() => setModalVisible(!modalVisible)} 
                href='#' 
                className='close-btn'>X</div>
            </div>
          </div>
          <form action=''>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input 
                  type='text' 
                  name='title' 
                  id='title' 
                  value={title}
                  required
                  onChange={(e) => setTitle(e.target.value)}
                  className='form-control'/>
            </div>
            <div className='form-group'>
              <label htmlFor='content'>Content</label>
              <textarea 
                    name='content' 
                    id='content' 
                    className='form-control'
                    value={content}
                    required
                    onChange={(e) => setContent(e.target.value)}
                    cols='10'
                    rows='7'/>
            </div>
            <div className='form-group'>
              <input type='submit' value='Save' className='btn' onClick={createNote}></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('#root'));
