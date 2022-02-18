import React from "react";
import Select from "./UI/select/Select";
import Input from "./UI/input/Input";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div style={{marginTop: 20}}>
            <Input
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Search" />

            <Select
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Sort"
                options={[
                    { value: 'title', name: 'by name' },
                    { value: 'body', name: 'by body' }
                ]} />
        </div>
    )
}

export default PostFilter;