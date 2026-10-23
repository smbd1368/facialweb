from pathlib import Path
from PIL import Image

root = Path("public/assets/facial-scroll")
names = [
    "before-01", "before-02", "before-03", "before-04", "before-05",
    "treatment", "after-01", "after-02", "after-03", "after-04",
]

columns_by_model = {1: 6, 2: 5, 3: 5, 4: 6, 5: 5}
for model in range(1, 6):
    source = root / f"model-{model:02d}-sheet-hq.png"
    target = root / f"model-{model:02d}"
    target.mkdir(exist_ok=True)
    image = Image.open(source).convert("RGB")
    columns = columns_by_model[model]
    cell_width = image.width // columns
    cell_height = image.height // 2
    for index, name in enumerate(names):
        if columns == 6:
            source_index = index if index < 6 else index + 1
            column, row = source_index % 6, source_index // 6
        else:
            column, row = index % 5, index // 5
        frame = image.crop((
            column * cell_width,
            row * cell_height,
            (column + 1) * cell_width,
            (row + 1) * cell_height,
        ))
        frame = frame.resize((900, 900), Image.Resampling.LANCZOS)
        frame.save(target / f"{name}.webp", "WEBP", quality=92, method=6)
