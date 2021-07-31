" display syntax errors inline
call pathogen#infect()

" Set leader to ,
let mapleader = ","

" 2 spaces for tab
set tabstop=2
set softtabstop=2
set shiftwidth=2
set autoindent
filetype plugin indent on       " load file type plugins + indentation
set expandtab
set smarttab
set lbr
set tw=500
set si "Smart indet
set nowrap                      " don't wrap lines
set backspace=indent,eol,start  " backspace through everything in insert mode

" Keep context while scrolling. Keep 5 lines above or below
set scrolloff=5

" Preserve indentation while pasting text from the OS X clipboard
noremap <leader>p :set paste<CR>:put  *<CR>:set nopaste<CR>

" Enable line numbers
" set number

" set guifont=DejaVu\ Sans\ Mono\ for\ Powerline:h14
set guifont=Inconsolata-dz\ for\ Powerline:h14

syntax on
syntax enable
let g:solarized_termcolors=256
let g:solarized_termtrans = 1
colorscheme solarized
set background=dark
set encoding=utf-8

set showcmd                     " display incomplete commands
set nocompatible                " choose no compatibility with legacy vi

" Enable SemanticHighlight when opening Vim
au BufRead,BufNewFile *.py,*.html,*.js,*.jsx SemanticHighlight
nnoremap <Leader>s :SemanticHighlightToggle<cr>
let g:semanticTermColors = [28,1,2,3,4,5,6,7,25,9,10,34,12,13,14,15,16,125,124,19]

" Toggle list style of Explore mode
let g:netrw_liststyle=3
map <leader>t :Explore<cr> 

" Use the below highlight group when displaying bad whitespace is desired.
highlight BadWhitespace ctermbg=red guibg=red

let g:syntastic_scss_checkers = ['scss_lint']
let g:syntastic_javascript_checkers = ['eslint']
let g:vim_markdown_folding_disabled=1
let g:flake8_max_line_length=100



" Syntax highlighters
au BufRead,BufNewFile *.handlebars,*.hbs,*.hjs set filetype=mustache
au BufRead,BufNewFile *.less set filetype=less 
au BufRead,BufNewFile *.html set filetype=mako
au BufNewFile,BufRead *.hql set filetype=hive expandtab         " for .hql files
au BufNewFile,BufRead *.q set filetype=hive expandtab           " for .q files
au BufRead,BufNewFile *.md setlocal textwidth=80

" Display tabs at the beginning of a line in Python mode as bad.
au BufRead,BufNewFile *.py,*.pyw match BadWhitespace /^\t\+/

" Make trailing whitespace be flagged as bad.
au BufRead,BufNewFile *.py,*.pyw,*.c,*.h,*.sh match BadWhitespace /\s\+$/

" Use UNIX (\n) line endings.
au BufNewFile *.py,*.pyw,*.c,*.h set fileformat=unix

" Make trailing whitespace be flagged as bad in rst docs.
au BufRead,BufNewFile *.rst match BadWhitespace /\s\+$/

" Strip trailing whitespace on save
au BufWritePre *.rst :%s/\s\+$//e

" Bad whitespace for html, js, css and yaml
au BufRead,BufNewFile *.html,*.css,*.js,*.less,*.yml match BadWhitespace /^\t\+/
au BufRead,BufNewFile *.html,*.css,*.js,*.less,*.yml match BadWhitespace /\s\+$/
au BufWritePre *.html,*.css,*.js,*.less,*.yml :%s/\s\+$//e

" Remap .html files as .py
augroup filetype
    autocmd BufNewFile,BufRead ~/src/eventbritecore/*.html set filetype=python
augroup END

" function! ESLintArgs()
"     let customConfig = findfile('.eslintrc.json', '.;')
" 
"     if customConfig != ''
"         let g:syntastic_javascript_eslint_args = '-c ' . customConfig
"     endif
" endfunction

" function SetJavascriptChecker()
"   for filename in ['.eslintrc', '.eslintrc.json', '.eslintrc-babel']
"     let customConfig = findfile(filename, '.;')
"     if customConfig != ''
"       let g:syntastic_javascript_eslint_args = '-c ' . customConfig
"       let b:syntastic_checkers = ['eslint']
"       return 1
"     endif
"   endfor
"   return 0
" endfunction
" autocmd FileType javascript call SetJavascriptChecker()
" autocmd BufReadPre,FileReadPre * call ESLintArgs()


" Hide the toolbar in MacVim
if has("gui_running")
    set guioptions=egmrt
endif

" Yank is the same as Copy
set clipboard+=unnamed

" Smart way to move b/t splits
map <C-j> <C-W>j
map <C-k> <C-W>k
map <C-h> <C-W>h
map <C-l> <C-W>l

" Set to auto read when a file is changed from the outside
set autoread

" When vimrc is edited, reload it
autocmd! bufwritepost ~/.vimrc source ~/.vimrc

set ruler "Always show current position
set cc=100 "Column at 100 chars

set showmatch "Show matching bracets when text indicator is over them

match Error /\s\+$/

" No sound on errors
set noerrorbells
set novisualbell
set t_vb=
set tm=500
set visualbell t_vb=
set vb

"" Searching
set hlsearch                    " highlight matches
set incsearch                   " incremental searching
set ignorecase                  " searches are case insensitive...
set smartcase                   " ... unless they contain at least one capital letter

" The Silver Searcher
if executable('ag')
    " Use ag over grep
    set grepprg=ag\ --nogroup\ --nocolor

    " Use ag in CtrlP for listing files. Lightning fast and respects .gitignore
    let g:ctrlp_user_command = 'ag %s -l --nocolor -g ""'

    " ag is fast enough that CtrlP doesn't need to cache
    " let g:ctrlp_use_caching = 0
endif

" CtrlP
" set wildignore+=*/tmp/*,*.so,*.swp,*.zip,*/target/*,*/require_built/*,*.pyc    " MacOSX/Linux
" let g:ctrlp_user_command = ['.git/', 'git --git-dir=%s/.git ls-files -oc --exclude-standard']
" let g:ctrlp_custom_ignore = '\v[\/]\.(git|hg|svn)$'
set runtimepath^=~/.vim/bundle/ctrlp.vim
let g:ctrlp_max_files=0
let g:ctrlp_max_depth=40
  
" bind K to grep word under cursor
nnoremap K :grep! "\b<C-R><C-W>\b"<CR>:cw<CR>

let g:syntastic_auto_loc_list = 2
let g:syntastic_check_on_open = 1

" vim-airline
" Note: Download the powerline-fonts, install them and set it as the default in terminal
let g:airline_powerline_fonts = 1
if !exists('g:airline_symbols')
  let g:airline_symbols = {}
endif
let g:airline_symbols.space = "\ua0"
" let g:airline#extensions#tabline#enabled = 1
set laststatus=2


"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Files, backups and undo
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Turn backup off, since most stuff is in SVN, git anyway...
set nobackup
set nowb
set noswapfile

""""""""""""""""""""""""""""""
" => Visual mode related
""""""""""""""""""""""""""""""
" Really useful!
"  In visual mode when you press * or # to search for the current selection
vnoremap <silent> * :call VisualSearch('f')<CR>
vnoremap <silent> # :call VisualSearch('b')<CR>

" Bash like keys for the command line
cnoremap <C-A>      <Home>
cnoremap <C-E>      <End>
cnoremap <C-K>      <C-U>

""""""""""""""""""""""""""""""
" => Command-T
""""""""""""""""""""""""""""""
let g:CommandTMaxHeight = 15
" set wildignore+=*.o,*.obj,.git,*.pyc
noremap <leader>f :CommandT<cr>
noremap <leader>F :CommandTFlush<cr>

nnoremap <leader><leader> <c-^> " switch between the currently open buffer and the previous one

nmap W <C-w>_

set undodir=~/.vim/undodir
set undofile
" set undolevels=1000 "maximum number of changes that can be undone
" set undoreload=10000 "maximum number lines to save for undo on a buffer reload

" set tags=/Volumes/eb_home/work/tags
