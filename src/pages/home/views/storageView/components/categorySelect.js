import { TreeSelect } from "antd"

const { TreeNode } = TreeSelect;

export default function CategorySelect(p) {
const handleChange=(value)=>{
    p.setCategory(value)
}

    return (
        <TreeSelect
            showSearch treeDefaultExpandAll
            style={{width:'410px'}}
            onChange={handleChange}
            defaultValue='不限'
        >
            <TreeNode value='不限' title='不限'></TreeNode>
            <TreeNode value='学习辅导' title='学习辅导'></TreeNode>
            <TreeNode value='高校真题' title='高校真题' selectable={false}>
                <TreeNode value='阶段性考试' title='阶段性考试'/>
                <TreeNode value='期中考试' title='期中考试'/>
                <TreeNode value='期末考试' title='期末考试'/>
            </TreeNode>
            <TreeNode value='考研资料' title='考研资料'></TreeNode>
            <TreeNode value='外语备考' title='外语备考' selectable={false}>
                <TreeNode value='托福TOEFL' title='托福TOEFL'/>
                <TreeNode value='雅思IELTS' title='雅思IELTS'/>
                <TreeNode value='四六级' title='四六级' selectable={false}>
                    <TreeNode value='四级CET-4' title='四级CET-4'/>
                    <TreeNode value='六级CET-6' title='六级CET-6'/>
                </TreeNode>
                <TreeNode value='英专' title='英专' selectable={false}>
                    <TreeNode value='专四TEM-4' title='专四TEM-4'/>
                    <TreeNode value='专八TEM-8' title='专八TEM-8'/>
                </TreeNode>
                <TreeNode value='GRE' title='GRE'/>
            </TreeNode>
            <TreeNode value='竞赛资料' title='竞赛资料' selectable={false}>
                <TreeNode value='学科竞赛' title='学科竞赛'/>
                <TreeNode value='创新创业' title='创新创业'/>
                <TreeNode value='建模竞赛' title='建模竞赛'/>
            </TreeNode>
            <TreeNode value='经验分享' title='经验分享' selectable={false}>
                <TreeNode value='留学' title='留学'/>
                <TreeNode value='保研' title='保研'/>
                <TreeNode value='考研' title='考研'/>
            </TreeNode>
            <TreeNode value='作业解析' title='作业解析'></TreeNode>
        </TreeSelect>
    )
}