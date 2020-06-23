import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.scss';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, label: 'Going to learn «React»', important: false, like: false},
                {id: 2, label: 'That is so good', important: false, like: false},
                {id: 3, label: 'I need a break...', important: false, like: false}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);

        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id),
                  newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        };

        this.setState(({data}) => {
            const newArr = [...data, newItem];

            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id),
                  old = data[index],
                  newItem = {...old, important: !old.important},
                  newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id),
                  old = data[index],
                  newItem = {...old, like: !old.like},
                  newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    render() {
        const {data} = this.state,
              liked = data.filter(item => item.like).length,
              allPosts = data.length;

        return (
            <div className="app">
                <AppHeader liked={liked} allPosts={allPosts} />
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm onAdd={this.addItem} />
            </div>
        )
    }
};
